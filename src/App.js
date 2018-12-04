import React, { Component } from 'react';
import Login from './components/login';
import NewFeed from './components/newfeed';
import Timeline from './components/timeline';
import EditBasicInfo from './components/edit-basic-info';
import EditEducation from './components/edit-education';
import EditInterests from './components/edit-interest-info';
import EditPassword from './components/edit-password';
import EditAccount from './components/edit-setting';
import TimeAbout from './components/timeline-about';
import TimePhoto from './components/timeline-photo';
import Followers from './components/timeline-followers';
import Following from './components/timeline-following';
import {BrowserRouter, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Route path="/" exact component={Login}/>
            <Route path="/newfeed" component={NewFeed}/>
            <Route path="/timeline" component={Timeline}/>
            <Route path="/edit" component={EditBasicInfo}/>
            <Route path="/basicEdit" component={EditBasicInfo}/>
            <Route path="/educationEdit" component={EditEducation}/>
            <Route path="/interestEdit" component={EditInterests}/>
            <Route path="/passwordEdit" component={EditPassword}/>
            <Route path="/accountEdit" component={EditAccount}/>
            <Route path="/timeabout" component={TimeAbout}/>
            <Route path="/timephoto" component={TimePhoto}/>
            <Route path="/following" component={Following}/>
            <Route path="/followers" component={Followers}/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
