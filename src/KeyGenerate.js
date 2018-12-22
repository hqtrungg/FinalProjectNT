import React, { Component } from 'react';
import Login from './components/login';
const { Keypair } = require('stellar-base');

class KeyGenerate extends Component {
    constructor(props){
        super(props);
        this.state = {
            Secret_Key: '',
            Public_Key: '',
        }
    }

    SendKeys = () => {
        var result = this.state.Secret_Key;
        return result;
    }


    render() {
        
        const key = Keypair.random();
        this.setState({
            Secret_Key: key.secret(),
            Public_Key: key.publicKey()
        })
        console.log(this.state.Secret_Key);
        return (
            <Login>
                PrivateKey={this.SendKeys}
            </Login>
        );
    }
}
export default KeyGenerate;

