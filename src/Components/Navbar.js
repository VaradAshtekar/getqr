import React from 'react'
import logo from '../static/getqrlogo.png';
import googlelogo from '../static/googlelogo.jpg';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Register } from './Register';
import { Login } from './Login';


export const Navbar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} height={50} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Chrome Apk</a>
                            </li>

                            <Link to="/register/">
                                <button type="button" className="btn downloadbutton shadow-none">
                                    Register
                                </button>
                            </Link>
                            <Link to="/login/">
                                <button type="button" className="btn login shadow-none">
                                    Login
                                </button>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}
