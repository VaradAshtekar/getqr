import React from 'react'
import { Navbarpro } from './Navbarpro';
import './Pro.css';
import qrcode from '../static/qrcode.png';


export const Dashboard = () => {
    return (
        <div>

            <a class="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                <i class="fa fa-bars" aria-hidden="true"></i>

            </a>

            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel"> <i class="fa fa-user" aria-hidden="true"></i>   User Name </h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">

                    <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            My QR Codes
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">All</a></li>
                            <li><a class="dropdown-item" href="#">Active</a></li>
                            <li><a class="dropdown-item" href="#">Inactive</a></li>
                        </ul>
                    </div>

                    <div className="dropdown mt-3">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            My Folders
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a className="dropdown-item" href="#">My Folder 1</a></li>
                            <li><a className="dropdown-item" href="#">My Folder 2</a></li>
                            <li><a className="dropdown-item" href="#">New Folder</a></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col">
                    <h2>Active QR (2)</h2>
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
                    <h2>https://www.getqr.com</h2>
                    <p>No Folder</p>
                    <p>May 27, 2021</p>
                </div>
                <div className="qrcode">
                    <div className="row">
                        <div className="col">
                            <div className="row"><h1>2</h1></div>
                            <div className="row"><p>Scans</p></div>
                        </div>
                        <div className="col"> <img src={qrcode} /></div>
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
                        <div className="col">
                            <div className="row"><h1>5</h1></div>
                            <div className="row"><p>Scans</p></div>
                        </div>
                        <div className="col"> <img src={qrcode} /></div>
                    </div>


                </div>
            </div>
        </div>


    )
}
