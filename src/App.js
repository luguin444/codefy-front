import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

import Header from './components/Header';
import LoginPage from './pages/LoginPage';

import Home from './pages/Home';
import Course from './pages/Course';
import Activity from './pages/Activity';

export default function App() {
    return (
    
      <Router>
        <UserProvider>
          <Switch>
            <Route path='/' component={LoginPage} exact/>
            <Route exact path='/home'>
              <Header />
              <Home />
            </Route>
            <Route path='/curso/:id' exact>
              <Header />
              <Course />
            </Route>
            <Route path='/activitie' exact>
              <Activity />
            </Route>
          </Switch>
        </UserProvider>
      </Router> 
    );
}
