import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';

class TimelineFollowers extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline component="followers" />
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-7">
                                <div className="friend-list">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="friend-card">
                                                <img src="images/covers/1.jpg" alt="profile-cover" className="img-responsive cover" />
                                                <div className="card-info">
                                                    <img src="images/users/user-3.jpg" alt="user" className="profile-photo-lg" />
                                                    <div className="friend-info">
                                                        <a href="#" className="pull-right text-green">My Friend</a>
                                                        <h5><a href="timeline.html" className="profile-link">Sophia Lee</a></h5>
                                                        <p>Student at Harvard</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="friend-card">
                                                <img src="images/covers/3.jpg" alt="profile-cover" className="img-responsive cover" />
                                                <div className="card-info">
                                                    <img src="images/users/user-4.jpg" alt="user" className="profile-photo-lg" />
                                                    <div className="friend-info">
                                                        <a href="#" className="pull-right text-green">My Friend</a>
                                                        <h5><a href="timeline.html" className="profile-link">John Doe</a></h5>
                                                        <p>Traveler</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="friend-card">
                                                <img src="images/covers/4.jpg" alt="profile-cover" className="img-responsive cover" />
                                                <div className="card-info">
                                                    <img src="images/users/user-10.jpg" alt="user" className="profile-photo-lg" />
                                                    <div className="friend-info">
                                                        <a href="timeline.html" className="pull-right text-green">My Friend</a>
                                                        <h5><a href="#" className="profile-link">Julia Cox</a></h5>
                                                        <p>Art Designer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="friend-card">
                                                <img src="images/covers/5.jpg" alt="profile-cover" className="img-responsive cover" />
                                                <div className="card-info">
                                                    <img src="images/users/user-7.jpg" alt="user" className="profile-photo-lg" />
                                                    <div className="friend-info">
                                                        <a href="#" className="pull-right text-green">My Friend</a>
                                                        <h5><a href="timelime.html" className="profile-link">Robert Cook</a></h5>
                                                        <p>Photographer at Photography</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="friend-card">
                                                <img src="images/covers/6.jpg" alt="profile-cover" className="img-responsive cover" />
                                                <div className="card-info">
                                                    <img src="images/users/user-8.jpg" alt="user" className="profile-photo-lg" />
                                                    <div className="friend-info">
                                                        <a href="#" className="pull-right text-green">My Friend</a>
                                                        <h5><a href="timeline.html" className="profile-link">Richard Bell</a></h5>
                                                        <p>Graphic Designer at Envato</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="friend-card">
                                                <img src="images/covers/7.jpg" alt="profile-cover" className="img-responsive cover" />
                                                <div className="card-info">
                                                    <img src="images/users/user-2.jpg" alt="user" className="profile-photo-lg" />
                                                    <div className="friend-info">
                                                        <a href="#" className="pull-right text-green">My Friend</a>
                                                        <h5><a href="timeline.html" className="profile-link">Linda Lohan</a></h5>
                                                        <p>Software Engineer</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="friend-card">
                                                <img src="images/covers/8.jpg" alt="profile-cover" className="img-responsive cover" />
                                                <div className="card-info">
                                                    <img src="images/users/user-9.jpg" alt="user" className="profile-photo-lg" />
                                                    <div className="friend-info">
                                                        <a href="#" className="pull-right text-green">My Friend</a>
                                                        <h5><a href="timeline.html" className="profile-link">Anna Young</a></h5>
                                                        <p>Musician</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="friend-card">
                                                <img src="images/covers/9.jpg" alt="profile-cover" className="img-responsive cover" />
                                                <div className="card-info">
                                                    <img src="images/users/user-6.jpg" alt="user" className="profile-photo-lg" />
                                                    <div className="friend-info">
                                                        <a href="#" className="pull-right text-green">My Friend</a>
                                                        <h5><a href="timeline.html" className="profile-link">James Carter</a></h5>
                                                        <p>CEO at IT Farm</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="friend-card">
                                                <img src="images/covers/10.jpg" alt="profile-cover" className="img-responsive cover" />
                                                <div className="card-info">
                                                    <img src="images/users/user-5.jpg" alt="user" className="profile-photo-lg" />
                                                    <div className="friend-info">
                                                        <a href="#" className="pull-right text-green">My Friend</a>
                                                        <h5><a href="timeline.html" className="profile-link">Alexis Clark</a></h5>
                                                        <p>Traveler</p>
                                                    </div>
                                                </div>
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

export default TimelineFollowers;