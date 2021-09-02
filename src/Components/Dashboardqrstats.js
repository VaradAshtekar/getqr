import React from 'react'
import './Pro.css';

export const Dashboardqrstats = () => {
    return (
        <div>

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

                        <div className="col-7"> <img src={qrcode} height={200} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
