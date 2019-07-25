import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';


class App extends Component {

    renderButton() {
        if(this.props.auth) {
            return (
                <button onClick={() => this.props.changeAuth(false)}>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={() => this.props.changeAuth(true)}>
                    Sign In
                </button>
            );
        }
    }

    renderHeader() {
        return(
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/post'>Post a comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>                
            </ul>
        )
    }
    render() {
        return(
            <div>
                {this.renderHeader()}
                <Route path='/' exact component={CommentList} />
                <Route path='/post' component={CommentBox} />
            </div>
        );
    }   
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);



/* Change to a class based component to have access to a few helper methods:

Which ones?

renderHeader
1. Home
2. Post
3. Sign in

*/