import React, { Component } from 'react';
import PostDate from './postdate';

class status extends Component {
    render() {
        return (
            <div className="post-content">

                <img src="images/post-images/12.jpg" alt="post-image" className="img-responsive post-image" />
                <div className="post-container">
                    <img src="images/users/user-1.jpg" alt="user" className="profile-photo-md pull-left" />
                    <div className="post-detail">
                        <div className="user-info">
                            <h5><a href="timeline.html" className="profile-link">Sarah Cruiz</a> <span className="following">following</span></h5>
                            <p className="text-muted">Published a photo about 15 mins ago</p>
                        </div>
                        <div className="reaction">
                            <a className="btn text-green"><i className="icon ion-thumbsup" /> 13</a>
                            <a className="btn text-blue"><i className="fa fa-share" /> 0</a>
                        </div>
                        <div className="line-divider" />
                        <div className="post-text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i className="em em-anguished" /> <i className="em em-anguished" /> <i className="em em-anguished" /></p>
                        </div>
                        <div className="line-divider" />
                        <div className="post-comment">
                            <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm" />
                            <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing" /> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                        </div>
                        <div className="post-comment">
                            <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm" />
                            <p><a href="timeline.html" className="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                        </div>
                        <div className="post-comment">
                            <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                            <input type="text" className="form-control" placeholder="Post a comment" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default status;