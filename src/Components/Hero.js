import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import qrcode from '../static/qrcode.png';

import { Email } from './Email';
import { Wifi } from './Wifi';
import { Bitcoin } from './Bitcoin';
import { Appstore } from './Appstore';
import { Vcard } from './Vcard';
import { Twitter } from './Twitter';
import { Text } from './Text';
import { Url } from './Url';

export const Hero = () => {
    return (

        <div className="container">
            <div className="container row hero-section">
                <Router>
                    <div className="col-7 col-md-7 col-sm-10 infoqr">

                        <div className="col-1 col-sm-2 col-md-1 iconsec">

                            <div className="icon">
                                <Link to="/appstoreqr"><i class="fa fa-phone" aria-hidden="true"></i></Link>
                            </div>
                            <div className="icon">
                                <Link to="/wifiqr"><i class="fa fa-wifi" aria-hidden="true"></i></Link>
                            </div>
                            <div className="icon">
                                <Link to="/twitterqr"><i class="fa fa-twitter" aria-hidden="true"></i></Link>
                            </div>
                            <div className="icon">
                                <Link to="/textqr"><i class="fa fa-font" aria-hidden="true"></i></Link>

                            </div>
                            <div className="icon">
                                <Link to="/emailqr"><i class="fa fa-envelope" aria-hidden="true"></i></Link>
                            </div>
                            <div className="icon">
                                <Link to="/bitcoinqr"><i class="fa fa-btc" aria-hidden="true"></i></Link>
                            </div>
                            <div className="icon">
                                <Link to="/vcardqr"><i class="fa fa-address-card" aria-hidden="true"></i></Link>
                            </div>
                            <div className="icon">
                                <Link to="/urlqr"><i class="fa fa-link" aria-hidden="true"></i></Link>
                            </div>

                        </div>

                        <div className="col-6 qr_content">
                            <Switch>

                                <Route exact path="/getqr">
                                    <Email />
                                </Route>
                                <Route path="/emailqr">
                                    <Email />
                                </Route>
                                <Route path="/textqr">
                                    <Text />
                                </Route>
                                <Route path="/wifiqr">
                                    <Wifi />
                                </Route>
                                <Route path="/appstoreqr">
                                    <Appstore />
                                </Route>
                                <Route path="/vcardqr">
                                    <Vcard />
                                </Route>
                                <Route path="/twitterqr">
                                    <Twitter />
                                </Route>
                                <Route path="/bitcoinqr">
                                    <Bitcoin />
                                </Route>
                                <Route path="/urlqr">
                                    <Url />
                                </Route>
                            </Switch>
                        </div>

                    </div>
                </Router>


                <div className="col-5 downloadqr">
                    <img src={qrcode} />
                    <div className="dropdown_opts">
                        <div className="dropdown">
                            <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Shape and Color <i class="fa fa-chevron-down" aria-hidden="true"></i>

                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>


                        <div className="dropdown">
                            <button className="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Logo position <i class="fa fa-chevron-down" aria-hidden="true"></i>

                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="downloadopts">
                        <button className="btn downloadbutton shadow-none"> Download PNG <span><i class="fa fa-download" aria-hidden="true"></i></span></button>
                        <button className="btn downloadbutton shadow-none"> Download SVG <span><i class="fa fa-download" aria-hidden="true"></i></span></button>

                    </div>

                </div>
            </div>

        </div >
    )
}
