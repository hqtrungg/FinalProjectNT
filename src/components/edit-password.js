/* eslint-disable */
import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';
import { Link } from 'react-router-dom'

class editpassword extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline />
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3">
                                <ul className="edit-menu">
                                    <li><i className="icon ion-ios-information-outline" /><Link to={`/basicEdit`}>Basic Information</Link></li>
                                    <li><i className="icon ion-ios-briefcase-outline" /><Link to={`/educationEdit`}>Education And Work</Link></li>
                                    <li><i className="icon ion-ios-heart-outline" /><Link to={`/interestEdit`}>My Interests</Link></li>
                                    <li><i className="icon ion-ios-settings" /><Link to={`/accountEdit`}>Account Settings</Link></li>
                                    <li className="active"><i className="icon ion-ios-locked-outline" /><Link to={`/passwordEdit`}>Change Password</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-7">
                                {/* Change Password
                                ================================================= */}
                                <div className="edit-profile-container">
                                    <div className="block-title">
                                        <h4 className="grey"><i className="icon ion-ios-locked-outline" />Change Password</h4>
                                        <div className="line" />
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                                        <div className="line" />
                                    </div>
                                    <div className="edit-block">
                                        <form name="update-pass" id="education" className="form-inline">
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="my-password">Old password</label>
                                                    <input id="my-password" className="form-control input-group-lg" type="password" name="password" title="Enter password" placeholder="Old password" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-6">
                                                    <label>New password</label>
                                                    <input className="form-control input-group-lg" type="password" name="password" title="Enter password" placeholder="New password" />
                                                </div>
                                                <div className="form-group col-xs-6">
                                                    <label>Confirm password</label>
                                                    <input className="form-control input-group-lg" type="password" name="password" title="Enter password" placeholder="Confirm password" />
                                                </div>
                                            </div>
                                            <p><a href="#">Forgot Password?</a></p>
                                            <button className="btn btn-primary">Update Password</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <Activity />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default editpassword;