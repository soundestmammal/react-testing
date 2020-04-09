import React from 'react';
import Header from './Header';
import Landing from './Landing';

export default ({ children }) => {
    return(
        <div>
            <Header />
            <Landing />
            { children }
        </div>
    );
};