import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
    class ComposedComponent extends Component {
        // Our component jsut got rendered
        componentDidMount() {
            this.shouldNavigateAway();
        }

        // Our Component just got updated
        componentDidUpdate() {
            this.shouldNavigateAway();
        }

        // If you are not authenticated, then you need to be redirected to the root route
        shouldNavigateAway() {
            if(!this.props.auth) {
                this.props.history.push('/')
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }
    function mapStateToProps(state) {
        return { auth: state.auth.authenticated }
    }
    
    return connect(mapStateToProps)(ComposedComponent)    
};

