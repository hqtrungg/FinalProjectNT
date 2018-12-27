/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import Footer from '../components/footer';
import PostBox from '../components/postbox';
import Status from '../components/status';
import { connect } from 'react-redux';
import { actGetAllNewsFeedRequest } from '../actions/newsfeed'
import { Stats } from 'fs';
import Pagination from "react-js-pagination";

class NewFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
          activePage: 15
        };
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

    componentDidMount() {
        this.props.OnGetAllNewsFeed();
    }

    showStatusList(tweets) {
        var result = null;
        var reverseTw = tweets.reverse();
        if (reverseTw.length > 0) {
            result = reverseTw.map((tweet, index) => {
                if (tweet.comment.length != 0) {
                    console.log('comment');
                }
                if (tweet.react.length != 0) {
                    console.log('react');
                }
                return <Status key={index} tweet={tweet} />
            })
        }
        return result;
    }

    render() {

        var id = localStorage.getItem('public');
        var { account, newsfeeds } = this.props;
        console.log(newsfeeds);
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
                                {this.showStatusList(this.props.newsfeeds)}
                                {/* <Status />
                                <Status />
                                <Status /> */}
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-9"></div>
                            <div className="col-md-3" style={{ display: 'flex', alignItems: 'right' }}>
                                
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
        account: state.account,
        newsfeeds: state.newsfeed.newsfeeds
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        OnGetAllNewsFeed: () => {
            dispatch(actGetAllNewsFeedRequest())
        },

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewFeed);