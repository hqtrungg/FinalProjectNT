/* eslint-disable */
import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CoverTimeline from '../components/cover-timeline';
import PostBox from '../components/postbox';
import Status from '../components/status';
import {TIMELINE} from '../constants/Timeline';
import { connect } from 'react-redux'
import { actSetProfileInfo } from '../actions/accounts';
import { actGetProfileInfoRequest } from '../actions/accounts'

class Profile extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline component={TIMELINE}/> 
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3">
                                
                            </div>
                            <div className="col-md-7">
                                <PostBox/>
                                
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
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        account: state.account,
    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actGetProfileInfoRequest : () => {
            dispatch(actSetProfileInfo())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);