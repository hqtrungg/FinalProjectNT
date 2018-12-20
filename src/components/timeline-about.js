/* eslint-disable */
import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';
import {TIMEABOUT} from '../constants/Timeline';
import { connect } from 'react-redux'

class TimelineAbout extends Component {
    render() {
        var {account} = this.props;
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline component={TIMEABOUT} />
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-7">
                                <div className="about-profile">
                                    <div className="about-content-block">
                                        <h4 className="grey"><i className="ion-ios-information-outline icon-in-title" />Personal Information</h4>
                                        <p>{account.infomation}</p>
                                    </div>
                                    
                                    <div className="about-content-block">
                                        <h4 className="grey"><i className="ion-ios-location-outline icon-in-title" />Location</h4>
                                        <p>{account.location}</p>
                                    </div>
                                    <div className="about-content-block">
                                        <h4 className="grey"><i className="ion-ios-heart-outline icon-in-title" />Interests</h4>
                                        <ul className="interests list-inline">
                                            <li><span className="int-icons" title="Bycycle riding"><i className="icon ion-android-bicycle" /></span></li>
                                            <li><span className="int-icons" title="Photography"><i className="icon ion-ios-camera" /></span></li>
                                            <li><span className="int-icons" title="Shopping"><i className="icon ion-android-cart" /></span></li>
                                            <li><span className="int-icons" title="Traveling"><i className="icon ion-android-plane" /></span></li>
                                            <li><span className="int-icons" title="Eating"><i className="icon ion-android-restaurant" /></span></li>
                                        </ul>
                                    </div>
                                    <div className="about-content-block">
                                        <h4 className="grey"><i className="ion-ios-chatbubble-outline icon-in-title" />Language</h4>
                                        <ul>
                                            <li><a href="#">Russian</a></li>
                                            <li><a href="#">English</a></li>
                                        </ul>
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

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}
export default connect(mapStateToProps, null)(TimelineAbout);