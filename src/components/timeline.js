import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';
import PostBox from './postbox';
import Status from './status';

class Timeline extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline component="timeline"/> 
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3"></div>
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

export default Timeline;