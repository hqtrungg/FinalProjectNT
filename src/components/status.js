/* eslint-disable */
import React, { Component } from 'react';
import Reaction from './reaction';
import Comments from './comments'

class status extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ''
        }
    }

    _handleKeyPress = (event) => {
        if (event.key == 'Enter') {
            return(
                <div className="post-comment">
                    <img src="images/users/user-11.jpg" alt="" className="profile-photo-sm" />
                    <p><a href="timeline.html" className="profile-link">Diana </a><i className="em em-laughing" />{this.state.comments}</p>
                </div>
            );
        }
    }

    updateInputValue = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    OnPostComment = (stringComments, event) => {
        if (this._handleKeyPress(event)) (
            <div className="post-comment">
                <img src="images/users/user-4.jpg" alt="" className="profile-photo-sm" />
                <p><a href="#" className="profile-link">John</a>{stringComments}</p>
            </div>
        )
    }
    render() {
        var {contents} = this.props;
        console.log(contents);
        return (
            <div className="post-content">
                <img src="images/post-images/12.jpg" alt="post-image" className="img-responsive post-image" />
                <div className="post-container">
                    <div className="reaction-emoji">
                        <Reaction />
                    </div>
                    <div className="line-divider" />
                    <img src="images/users/user-1.jpg" alt="user" className="profile-photo-md pull-left" />
                    <div className="post-detail">
                        <div className="user-info">
                            <h5><a href="timeline.html" className="profile-link">Sarah Cruiz</a> <span className="following">following</span></h5>
                            <p className="text-muted">Published a photo about 15 mins ago</p>
                        </div>
                        <div className="reaction">
                            <a className="btn text-blue"><i className="fa fa-share" /> 0</a>
                        </div>
                        <div className="line-divider" />
                        <div className="post-text">
                            <p>{contents}<i className="em em-anguished" /> <i className="em em-anguished" /> <i className="em em-anguished" /></p>
                        </div>
                        <div className="line-divider" />
                        <div className="post-comment">
                            <img src="images/users/user-1.jpg" alt="" className="profile-photo-sm" />
                            <input type="text" className="form-control" placeholder="Post a comment" onKeyPress={this._handleKeyPress} onChange={this.updateInputValue} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default status;