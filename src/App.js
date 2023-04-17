import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import LandingPage from './components/pages/LandingPage'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'

import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ LoginPage } />
                    <Route path="/home" component={ HomePage } />

                </Switch>
                
            </div>
        </Router>
    )
}



