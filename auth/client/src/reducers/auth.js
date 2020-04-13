import  { AUTH_USER, AUTH_ERROR, PROFILE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
    uuid: '',
    authenticated: '',
    errorMessage: ''
}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case AUTH_USER:
            return { ...state, authenticated: action.payload }
        case AUTH_ERROR:
            return { ...state, errorMessage: action.payload }
        case PROFILE_UPDATE:
            console.log("inside the auth reducer!");
            return state
        default: 
            return state
    }
}