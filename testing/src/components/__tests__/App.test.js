/*
Since it is in the __test__ we did not need it to be

The It Function: it is a global function, we do not need to import it into out test file

Organize the tests in the application.

Arguments to the Function
1. The string that is going to represent what we are going to do...
2. ??? The tests that we are going to run. ???

Key Points:
This is not running in a browser! This is being ran in a virtual environment
that exists in the command line, and not in any browser! No Chrome or Firefox or anything like that.

// What in the world is this line doing?
    // CLEANUP!   
    // It is going to remove the App Component from the root div!


*/

import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

it('shows a box', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App/>, div);

    // Now we can write code that will inspect that div element!
    // and checks that the comment box is in there!
    console.log(div.innerHTML);

    ReactDOM.unmountComponentAtNode(div);
});