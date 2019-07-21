import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'root';
import App from 'components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetched #2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    // Attempt to render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );
    
    // find the 'fetch comments' button and click it
    wrapped.find('.fetch-comments').simulate('click');
    

    // Introduce a TINY little pause... And wait for a moment before considering whole test
    setTimeout(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
    }, 1000);
});

/*
Simulate click event on the button element

Action creator gets called

Request is sent

Test fails

We are going to trick axios into thinking that it is working...

Moxios is going to return data from the api and fake out axios to think
that a request was successfully issued...
*/
