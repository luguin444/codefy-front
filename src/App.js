import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { CourseProvider } from "./contexts/CourseContext";

import Header from './components/Header';
import LoginPage from "./pages/LoginPage";
import Home from './pages/Home';
import Course from "./pages/Course";

export default function App() {
    return (
        <UserProvider>
            <CourseProvider>
                <Router>
                    <Header />
                    <Switch>
                        <Route path='/' component={LoginPage} exact/>
                        <Route path='/home' component={Home} exact />
                        <Route path='/course/:id' component={Course} exact/>
                    </Switch>
                </Router>
            </CourseProvider>
        </UserProvider>
    );
}
