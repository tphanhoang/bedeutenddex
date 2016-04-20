import fetchJSON from "app/fetchJSON"
import consts from "app/consts"
import React, { Component, PropTypes } from 'react';

export const GET = "bedeutenddex/pokemon/GET"
export const SET = "bedeutenddex/pokemon/SET"
export const ERROR = "bedeutenddex/pokemon/ERROR"

const initialState = {
  list:[]
}

const format = (data) => {
    //const {name, genres, images} = data    
    //const {id,name} = data  
    var result = ( typeof result != 'undefined' && result instanceof Array ) ? result : []    
    result[data.id] = data;
    
    
    return result;

}

// redux reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {

    case GET:
        return {
            list:[]
        }

    case SET:
        console.log(initialState.list);
        initialState.list[action.response.id]=action.response;
        return [
            ...initialState.list
        ]

    case ERROR:
        /* eslint-disable no-console */
        console.error(ERROR, action.error)
        /* eslint-disable no-console */
        return {
            error: (
                action.error && action.error.data &&
                action.error.data.error && action.error.data.error.user_message
            ) || true
        }

    default:
        return state
    }
}

// redux actions
export function getById(id) {
    return {
        types: [
            GET,
            SET,
            ERROR,
        ],
        promise: (
            fetchJSON(consts.api.enpoints.getPokemonById(id), {
                method: "GET"
            })
        )
    }
}


// redux actions
export function getByUrl(url) {
    return {
        types: [
            GET,
            SET,
            ERROR,
        ],
        promise: (
            fetchJSON(url, {
                method: "GET"
            })
        )
    }
}