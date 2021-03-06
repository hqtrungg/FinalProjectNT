/* eslint-disable */
import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';
import PostBox from './postbox';
import Status from './status';
import {TIMELINE} from '../constants/Timeline'

class Timeline extends Component {
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
                            <div className="col-md-3"></div>
                            <div className="col-md-7">
                                <PostBox/>
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

export default Timeline;