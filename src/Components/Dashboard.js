import React from 'react'
import { Navbarpro } from './Navbarpro';
import './Pro.css';
import qrcode from '../static/qrcode.png';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Dashboard = () => {

    function editpannel() {
        console.log("Hi");
        var edit = document.getElementsByClassName("download_edit_qr")[0];
        edit.innerHTML = "";
        var opts = document.createElement("DIV");
        opts.className = "opts";
        opts.innerHTML = '<i class= "fa fa-folder-o" aria-hidden="true"></i>  <i class="fa fa-pencil" aria-hidden="true"></i>   <i class="fa fa-paint-brush" aria-hidden="true"></i> <i class="fa fa-ellipsis-h" aria-hidden="true"></i> '
        edit.appendChild(opts);
    }
    return (
        <div>

            <div className="container">
                <a class="btn hamburger" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                    <i class="fa fa-bars" aria-hidden="true"></i>

                </a>

                <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                        <h5 class="offcanvas-title" id="offcanvasExampleLabel"> <i class="fa fa-user" aria-hidden="true"></i>   User Name </h5>
                        <p class="offcanvas-title" id="offcanvasExampleLabel"> Email@Id.com </p>

                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">

                        <div class="dropdown mt-3">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                My QR Codes
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a class="dropdown-item" href="#"><i class="fa fa-bars" aria-hidden="true"></i> All</a></li>
                                <li><a class="dropdown-item" href="#"><i class="fa fa-bolt" aria-hidden="true"></i> Active</a></li>
                                <li><a class="dropdown-item" href="#"><i class="fa fa-pause-circle-o" aria-hidden="true"></i> Inactive</a></li>
                            </ul>
                        </div>

                        <div className="dropdown mt-3">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                                My Folders
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#"><i class="fa fa-folder-o" aria-hidden="true"></i> My Folder 1</a></li>
                                <li><a className="dropdown-item" href="#"><i class="fa fa-folder-o" aria-hidden="true"></i> My Folder 2</a></li>
                                <li><a className="dropdown-item" href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i> New Folder</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="active_qr_status row">
                    <div className="col">
                        <h2><i class="fa fa-bolt" aria-hidden="true"></i>Active QR (2)</h2>
                    </div>
                    <div className="col">

                        <div className="dropdown">
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Last Created
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="grid">
                    <div className="webdetails">
                        <p>Website</p>
                        <Link to="/analytics">
                            <h2>https://www.getqr.com</h2>
                        </Link>
                        <p>No Folder</p>
                        <p>May 27, 2021</p>
                    </div>
                    <div className="qrcode">

                        <div className="row">
                            <div className="col-4">
                                <div className="row"><h1>2</h1></div>
                                <div className="row"><p>Scans</p></div>
                            </div>
                            <div className="col-1"><div className="line"></div></div>

                            <div className="col-5"> <img src={qrcode} height={200} /></div>
                            <div className="download_edit_qr align-self-center col-2" onClick={editpannel}> <i class="fa fa-arrow-circle-down" aria-hidden="true"></i></div>

                        </div>
                    </div>
                </div>


                <div className="grid">
                    <div className="webdetails">
                        <p>Website</p>
                        <h2>https://www.getqr.com</h2>
                        <p>No Folder</p>
                        <p>May 27, 2021</p>
                    </div>
                    <div className="qrcode">

                        <div className="row">
                            <div className="col-4">
                                <div className="row"><h1>2</h1></div>
                                <div className="row"><p>Scans</p></div>
                            </div>
                            <div className="col-1"><div className="line"></div></div>

                            <div className="col-5"> <img src={qrcode} height={200} /></div>
                            <div className="download_edit_qr align-self-center col-2" onClick={editpannel}> <i class="fa fa-arrow-circle-down" aria-hidden="true"></i></div>

                        </div>
                    </div>
                </div>

                <div className="add text-end"><i class="fa fa-plus-circle" aria-hidden="true"></i></div>
            </div>
        </div>


    )
}
