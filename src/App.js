import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { UserProvider } from './contexts/UserContext';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
      <UserProvider>
          <Router>
              <Switch>
                  <Route path='/' component={LoginPage} exact/>
                  <Route path='/home' component={LoginPage} exact/>
              </Switch>
          </Router>
      </UserProvider>
  );
}
