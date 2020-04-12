import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css'

class Header extends Component {
    renderLinks() {
        // If they are signed in, show
        if (this.props.authenticated) {
            return (
                <div>
                    <Link to="/signout">Sign out</Link>
                    <Link to="/feature">Feature</Link>
                </div>
            )
        } else {
            return (
                <div>
                    <Link to="/signup">Sign up</Link>
                    <Link to="/signin">Sign in</Link>
                </div>
            )
        }

        // else, show signup or sign in
    }
    render() {
        return(
            <div className='header'>
                <Link to="/">Redux Auth</Link>    
                {this.renderLinks()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);