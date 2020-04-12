import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './LandingStyle.css';

class Landing extends Component {
    onSubmit = () => {
        alert("You submitted this form!");
    }

    render() {
        return (
            <div>
                <div className="landing-image">
                    <div className="lp-darken">
                    <div className="lp-overlay">
                        <section className="lp-section-headings">
                            <span className="lp-heading">Tutoring</span>
                            <span className="lp-heading">A 1:1 Online Tutoring Platform</span>
                            <span className="lp-heading">Help your student reach their potential by enrolling them in online tutoring.</span>
                        </section>
                        

                        <div className="lp-request-info">
                            <h3 className="lp-request-heading">Request more info</h3>
                            <form onSubmit={this.onSubmit}>
                                <fieldset>
                                    <label>Name</label>
                                    <Field
                                        name="name"
                                        type="text"
                                        component='input'
                                        autoComplete='off'
                                    />
                                </fieldset>
                                <fieldset>
                                    <label>Email</label>
                                    <Field
                                        name="email"
                                        type="text"
                                        component="input"
                                        autoComplete="none"
                                    />
                                </fieldset>
                                <fieldset>
                                    <label>Phone Number</label>
                                    <Field 
                                        name="phone"
                                        type="text"
                                        component="input"
                                        autoComplete="none"
                                    />
                                </fieldset>
                                <fieldset>
                                    <label>Name of school or institution</label>
                                    <Field
                                        name="school"
                                        type="text"
                                        component="input"
                                        autoComplete="none"
                                    />
                                </fieldset>
                                <fieldset>
                                    <label>How can we help you</label>
                                    <Field
                                        name="info"
                                        type="text"
                                        component="input"
                                        autoComplete="none"
                                    />
                                </fieldset>
                                <button>Get Started</button>
                            </form>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { errorMessage: state.auth.errorMessage }
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'Landing' })
)(Landing);