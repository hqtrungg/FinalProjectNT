/* eslint-disable */
import React, { Component } from 'react';
const { Keypair } = require('stellar-base');
var base64 = require('base-64');
import Header from '../components/header'

class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PublicKey: '',
            PrivateKey: '',
            isFilled: false,
        }
    }

    onGetKey = () => {
        const key = Keypair.random();
        this.setState({
            PublicKey: key.publicKey(),
            PrivateKey: key.secret(),
            isFilled: true
        })
    }

    encode = (key) => {
        var encodeKey = base64.encode(key);
        console.log(encodeKey);
        return encodeKey;
    }

    localSave = (key1, key2) => {
        if(localStorage){
            localStorage.setItem('private', this.encode(key1));
            localStorage.setItem('public', this.encode(key2));
        }
        else{
            return null;
        }
    }

    OnChangeHandler = (e) => {
        this.setState({
            PublicKey: e.target.value
        })
    }
    alert = () => {
        this.state.isFilled ? alert("Success!") : alert("Failed");
        this.setState({
            isFilled: !this.state.isFilled
        })
    }
    render() {
        return (
            <div>
                <Header />
            
                {/* Landing Page Contents
                ================================================= */}
                <div id="lp-register">
                    <div className="container wrapper">
                        <div className="row">
                            <div className="col-sm-5">
                                <div className="intro-texts">
                                    <h1 className="text-white">Make Cool Friends !!!</h1>
                                    <p>Socialize is a social network template that can be used to connect people. The template offers Landing pages, News Feed, Image/Video Feed, Chat Box, Timeline and lot more.</p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-sm-offset-1">
                                <div className="reg-form-container">
                                    {/*Registration Form Contents*/}
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="register">
                                            <h3>Register Now !!!</h3>
                                            <p className="text-muted">Be cool and join today. Meet millions</p>
                                            {/*Register Form*/}
                                            <form name="registration_form" id="registration_form" className="form-inline">
                                                <div className="row">
                                                    <div className="form-group col-xs-12">
                                                        <label htmlFor="exampleInputEmail1">Private Key</label>
                                                        <input id="my-email" className="form-control input-group-lg" type="text" name="PrivateKey" title="Enter Private Key"
                                                            value={this.state.isFilled ? this.state.PrivateKey : ''} readOnly />
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="form-group col-xs-12">
                                                        <label htmlFor="exampleInputEmail1">Public Key</label>
                                                        <input id="my-email" className="form-control input-group-lg" type="text" name="PublicKey" title="Enter Public Key"
                                                            value={this.state.isFilled ? this.state.PublicKey : ''} readOnly />
                                                    </div>
                                                </div>
                                            </form>{/*Register Now Form Ends*/}

                                            <button className="btn btn-primary" onClick={this.onGetKey}>Generate Key Now</button>
                                            <button className="btn btn-success" style={{ borderRadius: '30px' }} onClick={this.alert}>Register</button>

                                        </div>{/*Registration Form Contents Ends*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default signup;