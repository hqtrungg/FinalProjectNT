/* eslint-disable */
import React, { Component } from 'react';

class TimelineFollowers extends Component {
    render() {
        var {follow} = this.props;
        return (
            <div className="col-md-6 col-sm-6">
                <div className="friend-card">
                    <img src="/images/covers/1.jpg" alt="profile-cover" className="img-responsive cover" />
                    <div className="card-info">
                        <img src="/images/users/user-3.jpg" alt="user" className="profile-photo-lg" />
                        <div className="friend-info">
                            <a href="#" className="pull-right text-green">My Friend</a>
                            <h5><a href="" className="profile-link">{follow.name}</a></h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TimelineFollowers;