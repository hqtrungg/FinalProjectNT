import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import {transaction} from './lib/transaction'
const {Keypair, StrKey} = require('stellar-base');

class App extends Component {

    render() {
        var key = Keypair.random();
        let publicKeyCre = key.publicKey();
        const dataCreateAccount = {
            version: 1,
            account: 'GDAIRCS73RR5LJXWA2IRQLIYDVUKG4TYRGV2WGPRS7LJBYXOVXRT3JOC',
            sequence: 13,
            memo: Buffer.alloc(0),
            operation: 'create_account',
            params: {
                address: publicKeyCre,
            },
        }
        transaction.sign(dataCreateAccount, 'SC6EN5ILS7746C2UYEZCY4JPA2VKD5WG75ZJXM4LUSIRHMSFW3FA2ONC');
        var hashTx = transaction.encode(dataCreateAccount).toString('hex');
        console.log(hashTx);
        return (
            <Router>
                <div>
                    {this.showContentMenus(routes)}
                </div>
            </Router>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }

}

export default App;
