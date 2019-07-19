import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'root';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})

it('creates one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain('Comment 1');
    expect(wrapped.render().text()).toContain('Comment 2');
});

// Two different ways to examine the html? 
/*
.text => String : Returns a string of the rendered text of the current render tree. Enzyme says should be used with skepticism...

Enzyme Recommendation:
.render() => CheerioWrapper

Returns a CheerioWrapper around the rendered HYML of the current node's subtree

What is Cheerio.js? It is a Web Scraping Library that uses jquery syntax.
*/