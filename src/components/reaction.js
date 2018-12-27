import React, { Component } from 'react';

class reaction extends Component {
    render() {
        var {number} = this.props;
        return (
            <div className="facebook-reaction">
                <span className="like-btn">
                    <span className="like-btn-emo like-btn-default"></span> 
                    <span className="like-btn-text">Like</span>
                    <ul className="reactions-box">
                        <li className="reaction reaction-like" data-reaction="Like"></li>
                        <li className="reaction reaction-love" data-reaction="Love"></li>
                        <li className="reaction reaction-haha" data-reaction="HaHa"></li>
                        <li className="reaction reaction-wow" data-reaction="Wow"></li>
                        <li className="reaction reaction-sad" data-reaction="Sad"></li>
                        <li className="reaction reaction-angry" data-reaction="Angry"></li>
                    </ul>
                </span>
                <div className="like-stat">
                    <span className="like-emo">
                        <span className="like-btn-like"></span>
                    </span>
                    <span className="like-details">{number}</span>
                </div>
            </div>
        );
    }
}

export default reaction;