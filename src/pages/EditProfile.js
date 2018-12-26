/* eslint-disable */
import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CoverTimeline from '../components/cover-timeline';
import {EDIT} from '../constants/Timeline';
import { connect } from 'react-redux';
import { actPostTransactionRequest } from '../actions/transactions';
import {transactionGet} from '../lib/transaction/get'

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state ={
            newName: ''
        }
    }
    render() {
        OnProfileUpdate = (newName) => {
            let account = this.props.transactions;
            let txs = transactionGet.updateName(localStorage.getItem('private'), account.sequence, newName);
            this.props.actProfileUpdate(txs);
        }

        OnHandleChange = (e) => {
            this.setState({
                newName: e.target.value
            })
        }
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline component={EDIT}/>
                    </div>
                    <div id="page-contents">
                        <div className="row">
                            <div className="col-md-3">
                                
                            </div>
                            <div className="col-md-7">
                                {/* Basic Information
                                ================================================= */}
                                <div className="edit-profile-container">
                                    <div className="block-title">
                                        <h4 className="grey"><i className="icon ion-android-checkmark-circle" />Edit basic information</h4>
                                    </div>
                                    <div className="edit-block">
                                        <form name="basic-info" id="basic-info" className="form-inline">
                                            <div className="row">
                                                <div className="form-group col-xs-6">
                                                    <label htmlFor="firstname">Your new name</label>
                                                    <input id="firstname" className="form-control input-group-lg" type="text" name="newname" title="Enter your new name" placeholder="New name" 
                                                    OnHandleChange={this.OnHandleChange()}/>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary" onClick={() => this.OnProfileUpdate(this.state.newName)}>Save Changes</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {
        transactions: state.transactions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actProfileUpdate: (transactions) => {
            dispatch(actPostTransactionRequest(transactions))
        },
        actProfileAvatarUpdate: (transactions) => {
            dispatch(actPostTransactionRequest(transactions))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);