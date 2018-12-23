/* eslint-disable */
import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CoverTimeline from '../components/cover-timeline';
import { FOLLOWING } from '../constants/Timeline';
import TimelineFollowing from '../components/timeline-following';
import { connect } from 'react-redux'
import { actFetchFollowingListRequest } from '../actions';

class FollowingList extends Component {
    render() {
        var { follows } = this.props;
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline component={FOLLOWING} />
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-7">
                                <div className="friend-list">
                                    <div className="row">
                                        {this.showFollowingList(follows)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    showFollowingList(follows){
        var result = null;
        if(follows.length > 0){
            result = follows.map((follow, index) => {
                return <TimelineFollowing key={index} follow={follow}/>
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        follows: state.follows
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchFollowingList: () => {
            dispatch(actFetchFollowingListRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FollowingList);