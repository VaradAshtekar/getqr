import './App.css';
import React from 'react';

import { Footer } from './Components/Footer';
import { Register } from './Components/Register';
import { Login } from './Components/Login';
import { Home } from './Components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar } from './Components/Navbar';
import { Qrtype } from './Components/Qrtype';
import { Dashboard } from './Components/Dashboard';
import { WebsiteQR } from './Components/WebsiteQR';


function App() {
  return (
    <>

      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/">
            < Home />
          </Route>
          <Route exact path="/register">
            < Register />
          </Route>

          <Route exact path="/login">
            < Login />
          </Route>

          <Route exact path="/qrtype">
            < Qrtype />
          </Route>
          <Route exact path="/dashboard">
            < Dashboard />
          </Route>
          <Route exact path="/webqr">
            <WebsiteQR />
          </Route>
        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
