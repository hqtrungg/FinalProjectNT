import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';
import { Link } from 'react-router-dom'

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
                                <ul className="edit-menu">
                                    <li><i className="icon ion-ios-information-outline" /><Link to={`/basicEdit`}>Basic Information</Link></li>
                                    <li><i className="icon ion-ios-briefcase-outline" /><Link to={`/educationEdit`}>Education And Work</Link></li>
                                    <li className="active"><i className="icon ion-ios-heart-outline" /><Link to={`/interestEdit`}>My Interests</Link></li>
                                    <li><i className="icon ion-ios-settings" /><Link to={`/accountEdit`}>Account Settings</Link></li>
                                    <li><i className="icon ion-ios-locked-outline" /><Link to={`/passwordEdit`}>Change Password</Link></li>
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