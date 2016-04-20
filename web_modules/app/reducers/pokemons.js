import fetchJSON from "app/fetchJSON"
import consts from "app/consts"

export const GET = "bedeutenddex/pokemons/GET"
export const SET = "bedeutenddex/pokemons/SET"
export const ERROR = "bedeutenddex/pokemons/ERROR"

const initialState = {
    loading:true
}

const format = (data) => {
    return {results:data}
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
            ...format(action.response.results)
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
export function get(limit,offset) {
    return {
        types: [
            GET,
            SET,
            ERROR,
        ],
        promise: (
            fetchJSON(consts.api.enpoints.getPokemons(limit,offset), {
                method: "GET"
            })
        )
    }
}
