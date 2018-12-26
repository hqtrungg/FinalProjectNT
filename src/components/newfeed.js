/* eslint-disable */
import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import PostBox from './postbox';
import Status from './status';
import FollowHint from './followhint'
import { Link } from 'react-router-dom'

class newfeed extends Component {
    render() {
        var id = localStorage.getItem('public');
        return (
            <div>
                <Header />
                <div id="page-contents">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 static">
                                <div className="profile-card">
                                    <img src="images/users/user-1.jpg" alt="user" className="profile-photo" />
                                    <h5>
                                        <Link to={`/${id}`} className="text-white">
                                            Sarah Cruiz
                                        </Link>
                                    </h5>
                                    <i className="ion ion-android-person-add" /><Link to={`/${id}/followers`} className="text-white">  1,299 followers</Link>
                                    <br />
                                    <i className="ion ion-android-person-add" /><Link to={`/${id}/following`} className="text-white">  1,000 following</Link>
                                </div>
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