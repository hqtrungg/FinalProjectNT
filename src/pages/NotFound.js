import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

class NotFound extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="error-page">
                    <div className="error-content">
                        <div className="container">
                            <img src="images/404.png" alt="" class="img-responsive" />
                            <div className="error-message">
                                <h1 className="error-title">Whoops!</h1>
                                <p>Looks like you are lost. But don't worry there is plenty to see!!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
                );
            }
        }
        
export default NotFound;