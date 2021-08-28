import React from 'react'
import logo from '../static/Component 1.svg';
import googlelogo from '../static/googlelogo.jpg';

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
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

                            <button type="button" className="btn downloadbutton shadow-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Register
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel"><img src={logo} alt="" /></h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body  registration">
                                            <h3>Create, Manage and Track <span> all your QR Codes in one </span></h3>
                                            <p>Sign up now and try all features free for 14 days</p>
                                            <div className="container">

                                                <div className="dropdown">
                                                    <button className="btn dropdown-toggle shadow-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Select your industry
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>


                                                <input type="email" className="qna" placeholder="Work Email" />
                                                <input type="password" className="qna" placeholder="Password" />


                                                <div className="dropdown">
                                                    <button className="btn dropdown-toggle shadow-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Where do you want to print ?
                                                    </button>
                                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    I agree with the Terms of service and Privacy policy
                                                </label>
                                            </div>


                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn showmore">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <button type="button" className="btn login shadow-none" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                Login
                            </button>

                            {/* <!-- Modal --> */}
                            <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel"><img src={logo} alt="" /></h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body  registration">

                                            <h3>Create, Manage and Track <span> all your QR Codes in one </span></h3>
                                            <p>Sign up now and try all features free for 14 days</p>
                                            <p>No account yet ? Sign In</p>
                                            <div className="container">

                                                <input type="email" className="qna" placeholder="Work Email" />
                                                <input type="password" className="qna" placeholder="Password" />


                                                <div class="form-check">
                                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label class="form-check-label" for="flexCheckDefault">
                                                        Keep me signed in <p>Forgot passowrd?</p>
                                                    </label>
                                                </div>

                                                <button type="button" className="btn showmore">Log in</button>
                                                <button type="button" className="btn showmore"><i class="fa fa-google" aria-hidden="true"></i>Sign in with Google</button>


                                            </div>


                                        </div>

                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
