import React from 'react'
import logo from '../static/Component 1.svg';

export const Footer = () => {
    return (
        <div className="row footer">
            <div className="col">
                <div className="row">
                    <img src={logo} />
                </div>
                <div className="row">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    <i class="fa fa-twitter-square" aria-hidden="true"></i>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>

                </div>

            </div>
            <div className="col">
                <h3>Products</h3>
                <p>Security <br />
                    Compliance <br />
                    Efficiency<br />
                    Branding<br />
                    Enterprise services<br />
                    Integrations<br />
                    COVID-19 features<br />
                    All features</p>

            </div>

            <div className="col">
                <h3>Resources</h3>
                <p>What is a QR Code?<br />
                    QR Codes in Marketing<br />
                    QR Codes on Materials<br />
                    QR Codes for Business<br />
                    QR Codes for Education<br />
                    QR Codes for Nonprofits<br />
                    QR Codes for Personal Use<br />
                    QR Codes for Holidays and Occasions</p>

            </div>

            <div className="col">
                <h3>Help</h3>
                <p></p>
                <p></p>

            </div>
        </div>
    )
}
