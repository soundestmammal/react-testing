import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import "./ProfileStyle.css";

class Profile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            first: '',
            last: ''
        }
    }
    // I need to have a method to go to fetch the account information

    // Handle change updates the state each time that the client types a word into
    // the input. It will continually update the state with the new text!!!
    handleChangeFirst = (event) => {
        this.setState({ first: event.target.value });
    }

    handleChangeLast = (event) => {
        this.setState({ last: event.target.value });
    }
    
    // The handle submit method is responsible for two things.
    // 1. When the function is ran, it makes sure that It alerts the client that they submitted this informaiton
    // 2. It prevents the default browser behavior of trying to issue request...
    handleSubmit = (event) => {
        // this.state.first ... last
        alert('Information was submitted.')
        event.preventDefault();
        console.log(this.state.first);
        console.log(this.state.last);

        // Call a function here, that is an action creator
        this.props.updateProfile(this.state.first, this.state.last);
    }

    render() {
        return (
            <div className="profile-container">
                <div className="profile-read">
                    <span>First</span>
                    <span>Last</span>
                    <span>Subject</span>
                </div>
                <div className="profile-update">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            First:
                        <input type='text' value={this.state.first} onChange={this.handleChangeFirst}></input>
                        </label>
                        <label>
                            Last:
                            <input type='text' value={this.state.last} onChange={this.handleChangeLast}></input>
                        </label>
                        <button>Update</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(null, actions)(Profile);