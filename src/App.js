import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import Header from './components/Header';
import LoginPage from "./pages/LoginPage";
import Home from './pages/Home';



export default function App() {
  return (
      <UserProvider>
          <Router>
              <Switch>
                  <Route path='/' component={LoginPage} exact/>
                  <Router path='/home'>
                      <Header />
                      <Home />
                  </Router>
              </Switch>
          </Router>
      </UserProvider>
  );
}
