/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class header extends Component {
    render() {
        var id = localStorage.getItem('public');
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
                                <Link className="navbar-brand" to={`/newsfeed`}><img src='/images/Logo_Resize.png' alt="logo" /></Link>
                            </div>
                            {/* Collect the nav links, forms, and other content for toggling */}
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right main-menu">
                                    <li className="dropdown">
                                        <button className="btn btn-default btn-lg btn-link" style={{ fontSize: '18px', marginTop: '5px' }} type="button" data-toggle="dropdown">
                                            <span className="fa fa-bell" style={{ color: 'white' }}></span>
                                        </button>
                                        {/* <span className="badge badge-notify">3</span> */}
                                        <ul className="dropdown-menu">
                                            <li>
                                                <a className="content" href="#">
                                                    <div className="notification-item">
                                                        <h4 className="item-title"><img src='/images/users/user-1.jpg' style={{width: '50px', height: '50px'}}/>Sarah · day ago</h4>
                                                        <p className="item-info">Marketing 101, Video Assignment</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="content" href="#">
                                                    <div className="notification-item">
                                                        <h4 className="item-title"><img src='/images/users/user-2.jpg' style={{width: '50px', height: '50px'}}/>Evaluation Deadline 1 · day ago</h4>
                                                        <p className="item-info">Marketing 101, Video Assignment</p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="content" href="#">
                                                    <div className="notification-item">
                                                        <h4 className="item-title"><img src='/images/users/user-3.jpg' style={{width: '50px', height: '50px'}}/>Evaluation Deadline 1 · day ago</h4>
                                                        <p className="item-info">Marketing 101, Video Assignment</p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown">
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Timeline <span><img src="/images/down-arrow.png" alt="" /></span></a>
                                        <ul className="dropdown-menu login">
                                            <li><Link to={`${id}`}>Profile</Link></li>
                                            <li><Link to={`/${id}/following`}>Following</Link></li>
                                            <li><Link to={`/${id}/edit`}>Edit Profile</Link></li>

                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link to={`/register`}>Register</Link></li>
                                    <li className="dropdown"><Link to={`/`} onClick={() => {localStorage.removeItem('private'); localStorage.removeItem('public')}}>Sign Out</Link></li>
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