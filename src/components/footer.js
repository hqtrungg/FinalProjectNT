/* eslint-disable */
import React, { Component } from 'react';

class footer extends Component {
    render() {
        return (
            <div>
                <footer id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="footer-wrapper">
                                <div className="col-md-3 col-sm-3">
                                    <a href="#"><img src="/images/Logo_Resize.png" alt="" className="footer-logo" /></a>
                                    <ul className="list-inline social-icons">
                                        <li><a href="#section"><i className="icon ion-social-facebook" /></a></li>
                                        <li><a href="#section"><i className="icon ion-social-twitter" /></a></li>
                                        <li><a href="#section"><i className="icon ion-social-googleplus" /></a></li>
                                        <li><a href="#section"><i className="icon ion-social-pinterest" /></a></li>
                                        <li><a href="#section"><i className="icon ion-social-linkedin" /></a></li>
                                    </ul>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <h5>For individuals</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">Signup</a></li>
                                        <li><a href="#">login</a></li>
                                        <li><a href="#">Explore</a></li>
                                        
                                    </ul>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <h5>For businesses</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">Business signup</a></li>
                                        <li><a href="#">Business login</a></li>
                                        
                                    </ul>
                                </div>
                                <div className="col-md-2 col-sm-2">
                                    <h5>About</h5>
                                    <ul className="footer-links">
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms</a></li>
                                        <li><a href="#">Help</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3 col-sm-3">
                                    <h5>Contact Us</h5>
                                    <ul className="contact">
                                        <li><i className="icon ion-ios-telephone-outline" />+1 (234) 222 0754</li>
                                        <li><i className="icon ion-ios-email-outline" />info@nachi.com</li>
                                        <li><i className="icon ion-ios-location-outline" />27 Nguyen Van Cu</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright">
                        <p>NT Team © 2018. All rights reserved</p>
                    </div>
                </footer>

            </div>
        );
    }
}

export default footer;