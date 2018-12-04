import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class editmenu extends Component {
    render() {
        return (
            <ul className="edit-menu">
                <li><i className="icon ion-ios-information-outline" /><Link to={`/basicEdit`}>Basic Information</Link></li>
                <li><i className="icon ion-ios-briefcase-outline" /><Link to={`/educationEdit`}>Education And Work</Link></li>
                <li><i className="icon ion-ios-heart-outline" /><Link to={`/interestEdit`}>My Interests</Link></li>
                <li><i className="icon ion-ios-settings" /><Link to={`/accountEdit`}>Account Settings</Link></li>
                <li><i className="icon ion-ios-locked-outline" /><Link to={`/passwordEdit`}>Change Password</Link></li>
            </ul>
        );
    }
}

export default editmenu;