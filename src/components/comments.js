import React, { Component } from 'react';

class comments extends Component {
    render() {
        var {comments} = this.props
        return (
            <div className="post-comment">
                <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm" />
                <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing" />{comments}</p>
            </div>
        );
    }
}

export default comments;