import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import Activity from './activity';
import CoverTimeline from './cover-timeline';

class TimelinePhoto extends Component {
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
                            <div className="col-md-3"></div>
                            <div className="col-md-7">
                                <ul className="album-photos">
                                    <li>
                                        <div className="img-wrapper" data-toggle="modal" data-target=".photo-1">
                                            <img src="images/album/1.jpg" alt="photo" />
                                        </div>
                                        <div className="modal fade photo-1" tabIndex={-1} role="dialog" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <img src="images/album/1.jpg" alt="photo" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-wrapper" data-toggle="modal" data-target=".photo-2">
                                            <img src="images/album/2.jpg" alt="photo" />
                                        </div>
                                        <div className="modal fade photo-2" tabIndex={-1} role="dialog" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <img src="images/album/2.jpg" alt="photo" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-wrapper" data-toggle="modal" data-target=".photo-3">
                                            <img src="images/album/3.jpg" alt="photo" />
                                        </div>
                                        <div className="modal fade photo-3" tabIndex={-1} role="dialog" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <img src="images/album/3.jpg" alt="photo" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-wrapper" data-toggle="modal" data-target=".photo-4">
                                            <img src="images/album/4.jpg" alt="photo" />
                                        </div>
                                        <div className="modal fade photo-4" tabIndex={-1} role="dialog" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <img src="images/album/4.jpg" alt="photo" />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-wrapper" data-toggle="modal" data-target=".photo-5">
                                            <img src="images/album/5.jpg" alt="photo" />
                                        </div>
                                        <div className="modal fade photo-5" tabIndex={-1} role="dialog" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <img src="images/album/5.jpg" alt />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-wrapper" data-toggle="modal" data-target=".photo-6">
                                            <img src="images/album/6.jpg" alt="photo" />
                                        </div>
                                        <div className="modal fade photo-6" tabIndex={-1} role="dialog" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <img src="images/album/6.jpg" alt />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-wrapper" data-toggle="modal" data-target=".photo-7">
                                            <img src="images/album/7.jpg" alt="photo" />
                                        </div>
                                        <div className="modal fade photo-7" tabIndex={-1} role="dialog" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <img src="images/album/7.jpg" alt />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-wrapper" data-toggle="modal" data-target=".photo-8">
                                            <img src="images/album/8.jpg" alt="photo" />
                                        </div>
                                        <div className="modal fade photo-8" tabIndex={-1} role="dialog" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <img src="images/album/8.jpg" alt />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="img-wrapper" data-toggle="modal" data-target=".photo-9">
                                            <img src="images/album/9.jpg" alt="photo" />
                                        </div>
                                        <div className="modal fade photo-9" tabIndex={-1} role="dialog" aria-hidden="true">
                                            <div className="modal-dialog modal-lg">
                                                <div className="modal-content">
                                                    <img src="images/album/9.jpg" alt />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>

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

export default TimelinePhoto;