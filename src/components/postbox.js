/* eslint-disable */
import React, { Component } from 'react';
import Status from './status'

class postbox extends Component {
    constructor(props){
        super(props);
        this.state = {
            image: null,
            postContents: ''
        }
    }

    handleChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    
    handleChangeContents = (event) => {
        this.setState({
            postContents: event.target.value
        })
    }

    OnShowPost = () => {
        return <Status contents={this.state.postContents}/>
    }

    handleShowImage() {
        return (<img id="target" src={this.state.image} style={{width: '100px', height: '100px', border: '0px'}}/>);
    }
    render() {

        return (
            <div className="create-post">
                <div className="row">
                    <div className="col-md-7 col-sm-7">
                        <div className="form-group">
                            <img src="images/users/user-1.jpg" alt="" className="profile-photo-md" />
                            <textarea name="texts" id="exampleTextarea" cols="30" rows="1" className="form-control" placeholder="Write what you wish" onChange={this.handleChangeContents}>
                                
                            </textarea>
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-5">
                        <div className="tools">
                            <ul className="publishing-tools list-inline">
                                <div className="upload-btn-wrapper">
                                    <button className="btn-upload">Upload photo</button>
                                    <input type="file" name="myfile" onChange={this.handleChange}/>
                                    
                                </div>
                                <button className="btn btn-primary pull-right" onClick={this.OnShowPost}>Publish</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default postbox;