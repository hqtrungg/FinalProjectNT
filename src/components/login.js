/* eslint-disable */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
const { Keypair, StrKey } = require('stellar-base');
var base64 = require('base-64');
import {transactionGet} from '../lib/transaction/get';
import { connect } from 'react-redux'
import { actPostLoginInfoRequest } from '../actions/accounts';

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PublicKey: '',
            PrivateKey: '',
        }
    }

    encode = (key) => {
        var encodeKey = base64.encode(key);
        return encodeKey;
    }

    GetPublicKey = () => {
        var key = Keypair.fromSecret(this.state.PrivateKey);
        this.setState({
            PublicKey: key.publicKey()
        })
        return key.publicKey();
    }

    localSave = () => {
        if (this.LoginChecking()) {
            localStorage.setItem('private', this.state.PrivateKey);
            localStorage.setItem('public', this.GetPublicKey());
            var login  = transactionGet.login(localStorage.getItem('private'));
            this.props.fetchLoginInfo(login.publicKey, login.signature);
        }
    }

    OnChangeHandler = (e) => {
        this.setState({
            PrivateKey: e.target.value
        })
    }

    LoginChecking = () => {
        if (StrKey.isValidEd25519SecretSeed(this.state.PrivateKey)) {
            return true;
        }
        return false;
    }

    render() {
        return (
            !localStorage.getItem('private') ?
                (<div>
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
                                    <a className="navbar-brand" href=""><img src="images/Logo_Resize.png" alt="logo" /></a>
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
                                        <div className="tab-pane" id="login">
                                            <h3>Login</h3>
                                            <p className="text-muted">Log into your account</p>
                                            {/*Login Form*/}
                                            <form name="Login_form" id="Login_form">
                                                <div className="row">
                                                    <div className="form-group col-xs-12">
                                                        <label htmlFor="my-email" className="sr-only">Private Key</label>
                                                        <input id="my-email" className="form-control input-group-lg" type="text" name="Email" title="Enter Private Key"
                                                            onChange={this.OnChangeHandler} />
                                                    </div>
                                                </div>
                                            </form>{/*Login Form Ends*/}
                                            {this.LoginChecking() ? (
                                                <Link to={"/newsfeed"}>
                                                    <button className="btn btn-primary" onClick={this.localSave}>Login Now</button>
                                                </Link>
                                            ) : (<Link to={"/"}>
                                                <button className="btn btn-primary" onClick={this.localSave}>Login Now</button>
                                            </Link>)}

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (<Redirect to={"/newsfeed"}/>)

        );
    }
}

const mapStateToProps = (state) => {
    return {
        accountInfo: state.accountInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoginInfo: (publicKey, signature) => {
            dispatch(actPostLoginInfoRequest(publicKey, signature));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(login);