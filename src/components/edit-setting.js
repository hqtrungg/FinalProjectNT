import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';
import { Link } from 'react-router-dom'

class editsetting extends Component {
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
                                    <li className="active"><i className="icon ion-ios-settings" /><Link to={`/accountEdit`}>Account Settings</Link></li>
                                    <li><i className="icon ion-ios-locked-outline" /><Link to={`/passwordEdit`}>Change Password</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-7">
                                {/* Profile Settings
                                ================================================= */}
                                <div className="edit-profile-container">
                                    <div className="block-title">
                                        <h4 className="grey"><i className="icon ion-ios-settings" />Account Settings</h4>
                                        <div className="line" />
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                                        <div className="line" />
                                    </div>
                                    <div className="edit-block">
                                        <div className="settings-block">
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <div className="switch-description">
                                                        <div><strong>Enable follow me</strong></div>
                                                        <p>Enable this if you want people to follow you</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="toggle-switch">
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line" />
                                        <div className="settings-block">
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <div className="switch-description">
                                                        <div><strong>Send me notifications</strong></div>
                                                        <p>Send me notification emails my friends like, share or message me</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="toggle-switch">
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line" />
                                        <div className="settings-block">
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <div className="switch-description">
                                                        <div><strong>Text messages</strong></div>
                                                        <p>Send me messages to my cell phone</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="toggle-switch">
                                                        <label className="switch">
                                                            <input type="checkbox" />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line" />
                                        <div className="settings-block">
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <div className="switch-description">
                                                        <div><strong>Enable tagging</strong></div>
                                                        <p>Enable my friends to tag me on their posts</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="toggle-switch">
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="line" />
                                        <div className="settings-block">
                                            <div className="row">
                                                <div className="col-sm-9">
                                                    <div className="switch-description">
                                                        <div><strong>Enable sound</strong></div>
                                                        <p>You'll hear notification sound when someone sends you a private message</p>
                                                    </div>
                                                </div>
                                                <div className="col-sm-3">
                                                    <div className="toggle-switch">
                                                        <label className="switch">
                                                            <input type="checkbox" defaultChecked />
                                                            <span className="slider round" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default editsetting;