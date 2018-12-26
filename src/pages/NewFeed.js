/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import PostBox from '../components/postbox';
import Status from '../components/status';
import FollowHint from '../components/followhint';
import { connect } from 'react-redux'
 
class NewFeed extends Component {
    render() {
        var id = localStorage.getItem('public');
        var { account } = this.props;
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
                                    <i className="ion ion-android-person-add" /><Link to={`/${id}/followers`} className="text-white">  {account.followers} followers</Link>
                                    <br />
                                    <i className="ion ion-android-person-add" /><Link to={`/${id}/following`} className="text-white">   {account.following} following</Link>
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
                        <div className='row'>
                            <div className="col-md-9"></div>
                            <div className="col-md-3" style={{display: 'flex', alignItems: 'right'}}>
                                <nav aria-label="..." style={{ marginRight: '0px', right: '0px' }}>
                                    <ul className="pagination">
                                        <li className="page-item disabled">
                                            <span className="page-link">Previous</span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item active">
                                            <span className="page-link">
                                                2
                                        <span className="sr-only">(current)</span>
                                            </span>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
}

const mapDispatchToProps = (state) => {
    return {
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewFeed);