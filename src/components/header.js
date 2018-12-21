/* eslint-disable */
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class header extends Component {
    render() {
        return (
            <div>
                <header id="header">
                    <nav className="navbar navbar-default navbar-fixed-top menu">
                        <div className="container">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <Link className="navbar-brand" to={`/newfeed`}><img src='/images/Logo_Resize.png' alt="logo" /></Link>
                            </div>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right main-menu">
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Newsfeed <span><img src="/images/down-arrow.png" alt="" /></span></a>
                                        <ul className="dropdown-menu newsfeed-home">
                                            <li><Link to={`/newfeed`}>Newsfeed</Link></li>
                                            <li><Link to={`/profile/followers`}>Followers</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Timeline <span><img src="/images/down-arrow.png" alt="" /></span></a>
                                        <ul className="dropdown-menu login">
                                            <li><Link to={`/profile`}>Profile</Link></li>
                                            <li><Link to={`/profile/following`}>Following</Link></li>
                                            <li><Link to={`/profile/followers`}>Followers</Link></li>
                                            <li><Link to="/profile/edit">Edit Profile</Link></li>
                                            
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link to={`/`}>Sign Out</Link></li>
                                </ul>
                                <form className="navbar-form navbar-right hidden-sm">
                                    <div className="form-group">
                                        <i className="icon ion-android-search" />
                                        <input type="text" className="form-control" placeholder="Search friends, photos, videos" />
                                    </div>
                                </form>
                            </div>{/* /.navbar-collapse */}
                        </div>{/* /.container */}
                    </nav>
                </header>

            </div>
        );
    }
}

export default header;