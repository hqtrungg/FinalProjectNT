/* eslint-disable */
import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CoverTimeline from '../components/cover-timeline';
import {EDIT} from '../constants/Timeline';
import { Link } from 'react-router-dom';

class EditProfile extends Component {
    render() {
        var {match} = this.props;
        console.log(match);
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline component={EDIT}/>
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3">
                                
                            </div>
                            <div className="col-md-7">
                                {/* Basic Information
                                ================================================= */}
                                <div className="edit-profile-container">
                                    <div className="block-title">
                                        <h4 className="grey"><i className="icon ion-android-checkmark-circle" />Edit basic information</h4>
                                    </div>
                                    <div className="edit-block">
                                        <form name="basic-info" id="basic-info" className="form-inline">
                                            <div className="row">
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="firstname">First name</label>
                                                    <input id="firstname" className="form-control input-group-lg" type="text" name="firstname" title="Enter first name" placeholder="First name" defaultValue="John" />
                                                </div>
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="lastname">Last name</label>
                                                    <input id="lastname" className="form-control input-group-lg" type="text" name="lastname" title="Enter last name" placeholder="Last name" defaultValue="Doe" />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary">Save Changes</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default EditProfile;