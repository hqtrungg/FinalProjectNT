/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {TIMELINE, EDIT, FOLLOWERS, FOLLOWING, WALLET} from '../constants/Timeline';
import { connect } from 'react-redux';

class covertimeline extends Component {
    render() {
        var {account} = this.props;
        return (
            <div className="timeline-cover">
                {/*Timeline Menu for Large Screens*/}
                <div className="timeline-nav-bar hidden-sm hidden-xs">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="profile-info">
                                <img src={account.avatar} alt="" className="img-responsive profile-photo" />
                                <h3>{account.name}</h3>
                                <p className="text-muted">{account.job}</p>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <ul className="list-inline profile-menu">
                                <li><Link className={this.props.component === TIMELINE ? "active" : ""} to={`/profile`}>Profile</Link></li>
                                <li><Link className={this.props.component === FOLLOWING ? "active" : ""} to={`/profile/following`}>Following</Link></li>
                                <li><Link className={this.props.component === FOLLOWERS ? "active" : ""} to={`/profile/followers`}>Followers</Link></li>
                                <li><Link className={this.props.component === EDIT ? "active" : ""} to={`/profile/edit`}>Edit Profile</Link></li>
                                <li><Link className={this.props.component === WALLET ? "active" : ""} to={`/profile/wallet`}>Wallet</Link></li>
                            </ul>
                            <ul className="follow-me list-inline">
                                <li>{account.following} Following</li>
                                <li>{account.followers} Followers</li>
                                <li><button className="btn-primary">Follow</button></li>
                            </ul>
                        </div>
                    </div>
                </div>{/*Timeline Menu for Large Screens End*/}
                {/*Timeline Menu for Small Screens*/}
                <div className="navbar-mobile hidden-lg hidden-md">
                    <div className="profile-info">
                        <img src={account.avatar} alt="" className="img-responsive profile-photo" />
                        <h4>{account.name}</h4>
                        <p className="text-muted">{account.job}</p>
                    </div>
                    <div className="mobile-menu">
                        <ul className="list-inline">
                            <li><Link className="active" to={`/profile`}>Timeline</Link></li>
                            <li><Link to={`/profile/about`}>About</Link></li>
                            <li><Link to={`/profile/album`}>Album</Link></li>
                            <li><Link to={`/profile/following`}>Following</Link></li>
                            <li><Link to={`/profile/followers`}>Followers</Link></li>
                        </ul>
                        <button className="btn-primary">Add Friend</button>
                    </div>
                </div>{/*Timeline Menu for Small Screens End*/}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}
export default connect(mapStateToProps, null)(covertimeline);