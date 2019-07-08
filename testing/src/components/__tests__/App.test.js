import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

it('shows a comment box', () => {
    const wrapped = shallow(<App/>);
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    const wrapped = shallow(<App/>);
    expect(wrapped.find(CommentList).length).toEqual(1);
})




















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
// Expectations: Proof that the code is working as we expect