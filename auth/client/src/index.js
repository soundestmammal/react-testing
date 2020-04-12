import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import Signup from './components/auth/Signup';
import Feature from './components/Feature';
import Signout from './components/auth/Signout';
import Signin from './components/auth/Signin';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';

const store = createStore(
    reducers,
    {
        auth: { authenticated: localStorage.getItem('token') }
    },
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App> 
                <Route path="/" exact component={Landing} />
                <Route path="/signup" component={Signup} />
                <Route path="/feature" component={Feature} />
                <Route path="/signout" component={Signout} />
                <Route path="/signin" component={Signin} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/profile" component={Profile} />
            </App>
        </BrowserRouter>
    </Provider>, 
    document.querySelector('#root'));