import React from 'react'
import { Navbarpro } from './Navbarpro';
import './Pro.css';

export const Dashboard = () => {
    return (
        <div>
            <Navbarpro />

            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>



            <header className="site-navbar site-navbar-target py-4" role="banner">

                <div className="container">
                    <div className="row align-items-center position-relative">

                        <div className="col-3 ml-auto text-right order-2">
                            <div className="site-logo">
                                <a href="index.html" className="font-weight-bold text-white">Brand</a>
                            </div>
                        </div>

                        <div className="col-9 order-1 text-left mr-auto">


                            <span className="d-inline-block d-lg-block"><a href="#" className="text-black site-menu-toggle js-menu-toggle py-5"><span className="icon-menu h3 text-white"></span></a></span>



                            <nav className="site-navigation text-right ml-auto d-none d-lg-none" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav ml-auto ">
                                    <li className="active"><a href="index.html" className="nav-link">Home</a></li>
                                    <li><a href="#" className="nav-link">About</a></li>
                                    <li><a href="#" className="nav-link">Services</a></li>
                                    <li><a href="#" className="nav-link">Blog</a></li>
                                    <li><a href="#" className="nav-link">Contact</a></li>
                                </ul>
                            </nav>
                        </div>


                    </div>
                </div>

            </header>
            <script src="./js/jquery-3.3.1.min.js"></script>
            <script src="./js/popper.min.js"></script>
            <script src="./js/jquery.sticky.js"></script>
            <script src="./js/main.js"></script>

        </div>


    )
}
