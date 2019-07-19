import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';

export default combineReducers({
    comments: commentsReducer
});

/*
This is the main reducer file. It imports two things:
1. combineReducers function from redux
2. The commentsReducer from the comments.js file in the reducers folder.

This file will import all of the reducers pass them into the combineReducers and allow for them to modify state.

What does Redux officially say about combineReducers?

Paraphrase:
As the app gets more complex you will want to split your reducing function into separate functions with each one managing a different part of the state.

CR is a helper function which takes an object whose values are different reducing functions, into a single reducing function that 
can get passed to createStore.

What is the result?
The combineReducer then calls every child reducer, and gathers the results into a single state object.
The state that is produced by combineReducers() namespaces the states of each reducer under their keys as passed to combineReducers. 

What are important notes from the redux team?

Any reducer passed to combineReducers must satisfy these rules:

1. For any action that is not recognized it must return the state given to it as the first argument.

2. It must never return undefined.

3. If the state given to it is undefined, it must return the intiial state for this specific reducer.
*/