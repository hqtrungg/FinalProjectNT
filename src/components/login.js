/* eslint-disable */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const { Keypair } = require('stellar-base');
var base64 = require('base-64');

class login extends Component {
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
                <header id="header-inverse">
                    <nav className="navbar navbar-default navbar-fixed-top menu">
                        <div className="container">
                            {/* Brand and toggle get grouped for better mobile display */}
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                                <a className="navbar-brand" href="index-register.html"><img src="images/Logo_Resize.png" alt="logo" /></a>
                            </div>
                        </div>{/* /.container */}
                    </nav>
                </header>
                {/*Header End*/}
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
                                    {/* Register/Login Tabs*/}
                                    <div className="reg-options">
                                        <ul className="nav nav-tabs">
                                            <li className="active"><a href="#register" data-toggle="tab">Register</a></li>
                                            <li><a href="#login" data-toggle="tab">Login</a></li>
                                        </ul>{/*Tabs End*/}
                                    </div>
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
                                        {/*Login*/}
                                        <div className="tab-pane" id="login">
                                            <h3>Login</h3>
                                            <p className="text-muted">Log into your account</p>
                                            {/*Login Form*/}
                                            <form name="Login_form" id="Login_form">
                                                <div className="row">
                                                    <div className="form-group col-xs-12">
                                                        <label htmlFor="my-email" className="sr-only">Private Key</label>
                                                        <input id="my-email" className="form-control input-group-lg" type="text" name="Email" title="Enter Private Key" 
                                                            value={!this.state.isFilled ? this.state.PublicKey : '  '} onChange={this.OnChangeHandler}/>
                                                    </div>
                                                </div>

                                            </form>{/*Login Form Ends*/}

                                            <Link to={`/newfeed`}>
                                                <button className="btn btn-primary" onClick={this.localSave(this.state.PrivateKey, this.state.PublicKey)}>Login Now</button>
                                            </Link>
                                        </div>
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

export default login;