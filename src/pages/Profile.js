/* eslint-disable */
import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Activity from '../components/activity';
import CoverTimeline from '../components/cover-timeline';
import PostBox from '../components/postbox';
import Status from '../components/status';
import {TIMELINE} from '../constants/Timeline';
import { Link } from 'react-router-dom'

class Profile extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline component={TIMELINE}/> 
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3">
                                
                            </div>
                            <div className="col-md-7">
                                <PostBox/>
                                <Status/>
                                <Status/>
                                <Status/>
                            </div>
                            <Activity/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Profile;