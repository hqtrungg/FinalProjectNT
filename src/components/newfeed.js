import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';
import PostBox from './postbox';
import Status from './status';
import FollowHint from './followhint'

class newfeed extends Component {
    render() {
        return (
            <div>
                <Header />
                <div id="page-contents">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 static">
                                <div className="profile-card">
                                    <img src="images/users/user-1.jpg" alt="user" className="profile-photo" />
                                    <h5><a href="timeline.html" className="text-white">Sarah Cruiz</a></h5>
                                    <a href="#" className="text-white"><i className="ion ion-android-person-add" /> 1,299 followers</a>
                                    <br />
                                    <a href="#" className="text-white"><i className="ion ion-android-person-add" /> 1,000 following</a>
                                </div>
                                <ul className="nav-news-feed">
                                    <li><i className="icon ion-ios-paper" /><div><a href="newsfeed.html">My Newsfeed</a></div></li>
                                    <li><i className="icon ion-ios-people" /><div><a href="newsfeed-people-nearby.html">People Nearby</a></div></li>
                                    <li><i className="icon ion-ios-people-outline" /><div><a href="newsfeed-friends.html">Friends</a></div></li>
                                    <li><i className="icon ion-chatboxes" /><div><a href="newsfeed-messages.html">Messages</a></div></li>
                                    <li><i className="icon ion-images" /><div><a href="newsfeed-images.html">Images</a></div></li>
                                    <li><i className="icon ion-ios-videocam" /><div><a href="newsfeed-videos.html">Videos</a></div></li>
                                </ul>
                            </div>

                            <div className="col-md-7">
                                <PostBox />
                                <Status />
                                <Status />
                                <Status />
                            </div>

                            <div className="col-md-2 static">
                                <FollowHint />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default newfeed;