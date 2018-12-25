/* eslint-disable */
import React, { Component } from 'react';

class postbox extends Component {
    render() {
        return (
            <div className="create-post">
                <div className="row">
                    <div className="col-md-7 col-sm-7">
                        <div className="form-group">
                            <img src="images/users/user-1.jpg" alt="" className="profile-photo-md" />
                            <textarea name="texts" id="exampleTextarea" cols="30" rows="1" className="form-control" placeholder="Write what you wish" />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-5">
                        <div className="tools">
                            <ul className="publishing-tools list-inline">
                                <div className="upload-btn-wrapper">
                                    <button className="btn-upload">Upload a file</button>
                                    <input type="file" name="myfile" />
                                </div>
                                <button className="btn btn-primary pull-right">Publish</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default postbox;