import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';
import { Link } from 'react-router-dom'

class editeducation extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline />
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3">
                                <ul className="edit-menu">
                                    <li><i className="icon ion-ios-information-outline" /><Link to={`/basicEdit`}>Basic Information</Link></li>
                                    <li className="active"><i className="icon ion-ios-briefcase-outline" /><Link to={`/educationEdit`}>Education And Work</Link></li>
                                    <li><i className="icon ion-ios-heart-outline" /><Link to={`/interestEdit`}>My Interests</Link></li>
                                    <li><i className="icon ion-ios-settings" /><Link to={`/accountEdit`}>Account Settings</Link></li>
                                    <li><i className="icon ion-ios-locked-outline" /><Link to={`/passwordEdit`}>Change Password</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-7">
                                {/* Edit Work and Education
                                ================================================= */}
                                <div className="edit-profile-container">
                                    <div className="block-title">
                                        <h4 className="grey"><i className="icon ion-ios-book-outline" />My education</h4>
                                        <div className="line" />
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                                        <div className="line" />
                                    </div>
                                    <div className="edit-block">
                                        <form name="education" id="education" className="form-inline">
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="school">My university</label>
                                                    <input id="school" className="form-control input-group-lg" type="text" name="school" title="Enter School" placeholder="My School" defaultValue="Harvard Unversity" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="date-from">From</label>
                                                    <input id="date-from" className="form-control input-group-lg" type="text" name="date" title="Enter a Date" placeholder="from" defaultValue={2012} />
                                                </div>
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="date-to" className>To</label>
                                                    <input id="date-to" className="form-control input-group-lg" type="text" name="date" title="Enter a Date" placeholder="to" defaultValue={2016} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="edu-description">Description</label>
                                                    <textarea id="edu-description" name="description" className="form-control" placeholder="Some texts about my education" rows={4} cols={400} defaultValue={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"} />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="graduate">Graduated?:-</label>
                                                    <input id="graduate" type="checkbox" name="graduate" defaultValue="graduate" defaultChecked /> Yes!!
                                    </div>
                                            </div>
                                            <button className="btn btn-primary">Save Changes</button>
                                        </form>
                                    </div>
                                    <div className="block-title">
                                        <h4 className="grey"><i className="icon ion-ios-briefcase-outline" />Work Experiences</h4>
                                        <div className="line" />
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate</p>
                                        <div className="line" />
                                    </div>
                                    <div className="edit-block">
                                        <form name="work" id="work" className="form-inline">
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="company">Company</label>
                                                    <input id="company" className="form-control input-group-lg" type="text" name="company" title="Enter Company" placeholder="Company name" defaultValue="Envato Inc" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="designation">Designation</label>
                                                    <input id="designation" className="form-control input-group-lg" type="text" name="designation" title="Enter designation" placeholder="designation name" defaultValue="Exclusive Author" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="from-date">From</label>
                                                    <input id="from-date" className="form-control input-group-lg" type="text" name="date" title="Enter a Date" placeholder="from" defaultValue={2016} />
                                                </div>
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="to-date" className>To</label>
                                                    <input id="to-date" className="form-control input-group-lg" type="text" name="date" title="Enter a Date" placeholder="to" defaultValue="Present" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="work-city">City/Town</label>
                                                    <input id="work-city" className="form-control input-group-lg" type="text" name="city" title="Enter city" placeholder="Your city" defaultValue="Melbourne" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="form-group col-xs-12">
                                                    <label htmlFor="work-description">Description</label>
                                                    <textarea id="work-description" name="description" className="form-control" placeholder="Some texts about my work" rows={4} cols={400} defaultValue={"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate"} />
                                                </div>
                                            </div>
                                            <button className="btn btn-primary">Save Changes</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <Activity />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default editeducation;