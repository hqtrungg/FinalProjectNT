/* eslint-disable */
import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CoverTimeline from '../components/cover-timeline';
import { FOLLOWING } from '../constants/Timeline';
import TimelineFollowing from '../components/timeline-following';
import { connect } from 'react-redux'
import { actFetchFollowingListRequest, actSetFollowingList } from '../actions/accounts';

class FollowingList extends Component {
    constructor(props){
        super(props);
        this.state = {
            followList: []
        }
    }
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

    onUnFollow = (id) => {
        this.props.actSetFollowingList(this.props.follows);
        
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

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFollowingList: () => {
            dispatch(actFetchFollowingListRequest())
        },
        setFollowingList: (follows) => {
            dispatch(actSetFollowingList(follows))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FollowingList);