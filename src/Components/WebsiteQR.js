import React from 'react'
import "./Pro.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const WebsiteQR = () => {
    return (
        <div className="webqr">
            <h1> <i class="fa fa-link" aria-hidden="true"></i> Website QR name</h1>
            <div className="grid">
                <div className="webdetails">
                    <div className="row">
                        <div className="col">
                            <h3>Enter your Website Address</h3>
                            <p>Type in the website to link with your QR Code</p>
                        </div>

                        <div className="col">
                            <div className="dropdown">
                                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Create Bulk
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <h4>Website : </h4>
                    <input type="text" className="qna" placeholder="https//:enterqr.com" />

                    <Link to="/dashboard">
                        <button className="btn generate">Generate</button>
                    </Link>
                </div>
                <div className="qrcode">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />

                    </div>

                    <div className="qrimage"></div>
                </div>
            </div>
        </div>
    )
}
