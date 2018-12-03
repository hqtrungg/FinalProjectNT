import React, { Component } from 'react';

class covertimeline extends Component {
    render() {
        return (
            <div className="timeline-cover">
                {/*Timeline Menu for Large Screens*/}
                <div className="timeline-nav-bar hidden-sm hidden-xs">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="profile-info">
                                <img src="images/users/user-1.jpg" alt className="img-responsive profile-photo" />
                                <h3>Sarah Cruiz</h3>
                                <p className="text-muted">Creative Director</p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <ul className="list-inline profile-menu">
                                <li><a href="timeline.html" className="active">Timeline</a></li>
                                <li><a href="timeline-about.html">About</a></li>
                                <li><a href="timeline-album.html">Album</a></li>
                                <li><a href="timeline-friends.html">Following</a></li>
                                <li><a href="#">Followers</a></li>
                            </ul>
                            <ul className="follow-me list-inline">
                                <li>1,299 Following</li>
                                <li>1,000 Followers</li>
                                <li><button className="btn-primary">Add Friend</button></li>
                            </ul>
                        </div>
                    </div>
                </div>{/*Timeline Menu for Large Screens End*/}
                {/*Timeline Menu for Small Screens*/}
                <div className="navbar-mobile hidden-lg hidden-md">
                    <div className="profile-info">
                        <img src="images/users/user-1.jpg" alt className="img-responsive profile-photo" />
                        <h4>Sarah Cruiz</h4>
                        <p className="text-muted">Creative Director</p>
                    </div>
                    <div className="mobile-menu">
                        <ul className="list-inline">
                            <li><a href="timline.html">Timeline</a></li>
                            <li><a href="timeline-about.html" className="active">About</a></li>
                            <li><a href="timeline-album.html">Album</a></li>
                            <li><a href="timeline-friends.html">Friends</a></li>
                        </ul>
                        <button className="btn-primary">Add Friend</button>
                    </div>
                </div>{/*Timeline Menu for Small Screens End*/}
            </div>
        );
    }
}

export default covertimeline;