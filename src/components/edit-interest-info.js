import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';

class editinterestinfo extends Component {
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
                                    <li className="active"><i className="icon ion-ios-heart-outline" /><a href="edit-profile-interests.html">My Interests</a></li>
                                    <li><i className="icon ion-ios-settings" /><a href="edit-profile-settings.html">Account Settings</a></li>
                                    <li><i className="icon ion-ios-locked-outline" /><a href="edit-profile-password.html">Change Password</a></li>
                                </ul>
                            </div>
                            <div className="col-md-7">
                                {/* Edit Interests
                                ================================================= */}
                                <div className="edit-profile-container">
                                    <div className="block-title">
                                        <h4 className="grey"><i className="icon ion-ios-heart-outline" />My Interests</h4>
                                        <div className="line" />
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                                        <div className="line" />
                                    </div>
                                    <div className="edit-block">
                                        <ul className="list-inline interests">
                                            <li><a href="#"><i className="icon ion-android-bicycle" /> Bycicle</a></li>
                                            <li><a href="#"><i className="icon ion-ios-camera" /> Photgraphy</a></li>
                                            <li><a href="#"><i className="icon ion-android-cart" /> Shopping</a></li>
                                            <li><a href="#"><i className="icon ion-android-plane" /> Traveling</a></li>
                                            <li><a href="#"><i className="icon ion-android-restaurant" /> Eating</a></li>
                                        </ul>
                                        <div className="line" />
                                        <div className="row">
                                            <p className="custom-label"><strong>Add interests</strong></p>
                                            <div className="form-group col-sm-8">
                                                <input id="add-interest" className="form-control input-group-lg" type="text" name="interest" title="Choose Interest" placeholder="Interests. For example, photography" />
                                            </div>
                                            <div className="form-group col-sm-4">
                                                <button className="btn btn-primary">Add</button>
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

export default editinterestinfo;