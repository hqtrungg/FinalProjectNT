import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';

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
                                {/*Edit Profile Menu*/}
                                <ul className="edit-menu">
                                    <li><i className="icon ion-ios-information-outline" /><a href="edit-profile-basic.html">Basic Information</a></li>
                                    <li><i className="icon ion-ios-briefcase-outline" /><a href="edit-profile-work-edu.html">Education and Work</a></li>
                                    <li><i className="icon ion-ios-heart-outline" /><a href="edit-profile-interests.html">My Interests</a></li>
                                    <li><i className="icon ion-ios-settings" /><a href="edit-profile-settings.html">Account Settings</a></li>
                                    <li className="active"><i className="icon ion-ios-locked-outline" /><a href="edit-profile-password.html">Change Password</a></li>
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