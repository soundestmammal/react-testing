import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;
beforeEach(() => {
    wrapped = mount(<Root><CommentBox/></Root>);
}); 

afterEach(() => {
    wrapped.unmount();
})

it('has a text area and a button', () => {
    // expect(wrapped.find(<button/>, <textarea/>));
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);

});

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment' }
        });
        wrapped.update();
    });

    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('when form is submitted, text area gets emptied', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});

/*
How to do testing...

We create our provider tag inside our app.js file.

Take all of the logic and put it inside of a helper function inside of that file.

Import that function into other test files, in order to set up other distinct components

src/index.js helper function will set up redux store and the provider tag and accept any arbitrary child component

src/root.js

Get started with a root.js file... What is this for?

Inside the src direction create root.js

In the test file it is just the comment box that is being wrapped by the redux store...

Anything that is wrapped by the Root tag will think that it is appropriately being nested within the redux store. 
*/

