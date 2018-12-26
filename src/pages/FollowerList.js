/* eslint-disable */
import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CoverTimeline from '../components/cover-timeline';
import { FOLLOWERS } from '../constants/Timeline';
import TimelineFollowers from '../components/timeline-followers';
import { connect } from 'react-redux'
import { actFetchFollowerListRequest } from '../actions';

class FollowerList extends Component {
    render() {
        var { follows } = this.props;
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline component={FOLLOWERS} />
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3"></div>
                            <div className="col-md-7">
                                <div className="friend-list">
                                    <div className="row">
                                        {this.showFollowerList(follows)}
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

    showFollowerList(follows) {
        var result = null;
        if (follows.length > 0) {
            result = follows.map((follow, index) => {
                return <TimelineFollowers key={index} follow={follow} />
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
        fetchFollowerList: () => {
            dispatch(actFetchFollowerListRequest())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FollowerList);