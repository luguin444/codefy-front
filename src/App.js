import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';

import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import recoverPasswordPage from './pages/RecoverPasswordPage/EmailPage';
import newPasswordPage from './pages/RecoverPasswordPage/NewPasswordPage';
import Home from './pages/Home';
import Course from './pages/Course';
import Activity from './pages/Activity';
import { CourseProvider } from './contexts/CourseContext';

export default function App() {
    return (
      <UserProvider>
        <CourseProvider>
          <Router>
            <Header />
            <Switch>
              <Route path='/' component={LoginPage} exact/>
              <Route path='/recover-password' component={recoverPasswordPage} exact/>
              <Route path='/recover-password/:token' component={newPasswordPage} exact/>
              <Route path='/home' component={Home} exact />
              <Route path='/course/:courseId' component={Course} exact/>
              <Route path='/courses/:courseId/chapter/:chapterId/topic/:topicId/:activityType/:activityId' component={Activity} exact />
            </Switch>
          </Router>
        </CourseProvider>
      </UserProvider>
    );
}
