/* eslint-disable */
import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import CoverTimeline from '../components/cover-timeline';
import { WALLET } from '../constants/Timeline';
import { connect } from 'react-redux'

class Wallet extends Component {
    render() {
        var { match } = this.props;
        console.log(match);
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="timeline">
                        <CoverTimeline component={WALLET} />
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
                                        <h4 className="grey"><i className="icon ion-android-checkmark-circle" />Your Currency</h4>
                                        <h4 className="grey" style={{ marginLeft: '50px', color: 'rgb(20, 154, 201)', fontSize: '24px' }}>70000 CEL</h4>
                                    </div>
                                    <br></br>
                                    <div className="block-title">
                                        <h4 className="grey"><i className="icon ion-android-checkmark-circle" />Your Energy</h4>
                                        <h4 className="grey" style={{ marginLeft: '50px', color: 'rgb(20, 154, 201)', fontSize: '24px' }}>70000 OXY</h4>
                                    </div>
                                    <br></br>
                                    <div className="block-title">
                                        <h4 className="grey"><i className="icon ion-android-checkmark-circle" />Your Transaction</h4>
                                        <table className="table table-hover" style={{fontSize: '16px', width: '700px'}}>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Height</th>
                                                    <th scope="col">Hash</th>
                                                    <th scope="col">Time</th>
                                                    <th scope="col">Transactions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Mark</td>
                                                    <td>Otto</td>
                                                    <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Jacob</td>
                                                    <td>Thornton</td>
                                                    <td>@fat</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td colSpan="2">Larry the Bird</td>
                                                    <td>@twitter</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = () => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);