/* eslint-disable */
import React, { Component } from 'react';

class TimelineFollowing extends Component {
    render() {

        return (
            <div className="col-md-6 col-sm-6">
                <div className="friend-card">
                    <img src="/images/covers/4.jpg" alt="profile-cover" className="img-responsive cover" />
                    <div className="card-info">
                        <img src="/images/users/user-10.jpg" alt="user" className="profile-photo-lg" />
                        <div className="friend-info">
                            <a onClick={() => {}} className="pull-right text-green">Unfollow</a>
                            <h5><a href="#" className="profile-link">Julia Cox</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimelineFollowing;