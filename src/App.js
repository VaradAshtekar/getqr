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


function App() {
  return (
    <>
      <Navbar />

      <Router>
        <Switch>
          <Route path="/">
            < Home />
          </Route>
          <Route path="/register">
            < Register />
          </Route>

          <Route path="/login">
            < Login />
          </Route>

          <Route path="/qrtype">
            < Qrtype />
          </Route>
          <Route path="/dashboard">
            < Dashboard />
          </Route>

        </Switch>
      </Router>

      <Footer />
    </>
  );
}

export default App;
