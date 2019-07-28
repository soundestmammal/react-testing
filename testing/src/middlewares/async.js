// export default function({ dispatch }) {
//     return function (next) { // next is a function
//         return function(action) {

//         }
//     }
// }

// export default ({ dispatch }) => next => action => {

// }


export default ({dispatch}) => next => action => {
    // Check to see if the action
    // has a promise on payload property
    // If it does, then wait to resolve
    // If it doesn't, send to the next middleware
    if(!action.payload || !action.payload.then) {
        return next(action);
    }
    // We want to wai for the promise to resolve
    // (get its data) and then create a new action
    // with that data and dispatch it

    action.payload.then(function (response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
    });
}
    
        