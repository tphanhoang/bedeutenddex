import fetchJSON from "app/fetchJSON"
import consts from "app/consts"
import React, { Component, PropTypes } from 'react';

export const GET = "bedeutenddex/pokemon_detail/GET"
export const SET = "bedeutenddex/pokemon_detail/SET"
export const ERROR = "bedeutenddex/pokemon_detail/ERROR"

const initialState = {
  loading:false
}


// redux reducer
export default function reducer(state = initialState, action) {
    switch (action.type) {

    case GET:
        return {
            loading:true
        }

    case SET:
        
        return {
            ...action.response
        }        

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


