import axios from 'axios';
import { AUTH_USER } from './types';

// REDUX THUNK returns a function called dispatch
export const signup = (formProps) => dispatch => {
    axios.post('http://localhost:3090/signup', formProps);
}

/* Redux Thunk, we can dispatch as many actions as we choose,
for Redux Promise, we can dispatch only one action?
*/