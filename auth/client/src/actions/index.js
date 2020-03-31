import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

// REDUX THUNK returns a function called dispatch
export const signup = (formProps, callback) => async dispatch => {
    try {
        const response = await axios.post('http://localhost:3090/signup', formProps);

        dispatch({ type: AUTH_USER, payload: response.data.token });
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: 'Email in use' })
    }
    

    // We will return back to this action creator soon in the future.
}

/* Redux Thunk, we can dispatch as many actions as we choose,
for Redux Promise, we can dispatch only one action?
*/
