import React from 'react'
import "./Pro.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Qrtype = () => {
    return (
        <div className="container">
            <div className="heading_qr">
                <h2> Select your QR Type</h2>
                <form class="d-flex">
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input class="form-control me-2 shadow-none" type="search" aria-label="Search" />
                    <button class="btn" type="submit"> <i class="fa fa-chevron-circle-down" aria-hidden="true"></i></button>
                </form>
            </div>
            <div className="container grid">
                <div className="qrtypes">

                    <Link to="/webqr/">
                        <div className="btn type">
                            <div className="typeicon">
                                <i class="fa fa-link" aria-hidden="true"></i>

                            </div>
                            <div className="text">
                                <h3> Website </h3>
                                <p>Link to any page on the web</p>
                            </div>
                        </div>
                    </Link>

                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-money" aria-hidden="true"></i>
                        </div>
                        <div className="text">
                            <h3>Business Page</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>

                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-ticket" aria-hidden="true"></i>

                        </div>
                        <div className="text">
                            <h3>Coupons</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>

                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-star" aria-hidden="true"></i>

                        </div>
                        <div className="text">
                            <h3>Ratings</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>


                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-calendar-check-o" aria-hidden="true"></i>

                        </div>
                        <div className="text">
                            <h3>Event</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>


                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-facebook" aria-hidden="true"></i>

                        </div>
                        <div className="text">
                            <h3>Facebook</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>


                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-volume-up" aria-hidden="true"></i>

                        </div>
                        <div className="text">
                            <h3>MP3</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>

                </div>

                <div className="qrtypes">

                    <Link to="/smqr">
                        <div className="btn type">
                            <div className="typeicon">
                                <i class="fa fa-mobile" aria-hidden="true"></i>

                            </div>
                            <div className="text">
                                <h3>Social Media</h3>
                                <p>Link to any page on the web</p>
                            </div>
                        </div>
                    </Link>
                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-credit-card-alt" aria-hidden="true"></i>

                        </div>
                        <div className="text">
                            <h3>vCard Plus</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>

                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-comments" aria-hidden="true"></i>

                        </div>
                        <div className="text">
                            <h3>Feedback</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>

                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-play" aria-hidden="true"></i>

                        </div>
                        <div className="text">
                            <h3>Video</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>

                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-file-pdf-o" aria-hidden="true"></i>

                        </div>
                        <div className="text">
                            <h3>PDF</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>


                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-id-badge" aria-hidden="true"></i>
                        </div>
                        <div className="text">
                            <h3>App</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>

                    <div className="btn type">
                        <div className="typeicon">
                            <i class="fa fa-picture-o" aria-hidden="true"></i>

                        </div>
                        <div className="text">
                            <h3>Images</h3>
                            <p>Link to any page on the web</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
