import React from 'react'
import { gsap } from "gsap";
import icon1 from '../static/heroicons-solid_pencil.png';
import details from '../static/steps/details.svg';
import qr from '../static/steps/downloadqrimg.svg';
import type from '../static/steps/type.svg';
import { Hero } from './Hero.js';
import brush from '../static/brush.png';
import server from '../static/server.png';

const { useEffect, useState } = React;

export const Home = () => {


    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1.2 });
    };

    const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { scale: 1 });
    };


    return (
        <>

            <Hero />
            <div className="idea-section">
                <div className="container">
                    <h2 className="heading">Check out more Get QR ideas</h2>
                    <div className="idea_column">
                        <div className="ideas">
                            <div className="icon_ideas">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </div>
                            <h3> Dynamic QR codes</h3>
                            <p>Edit and change your QR codes anytime.</p>
                        </div>

                        <div className="ideas">
                            <div className="icon_ideas"><i class="fa fa-bars" aria-hidden="true"></i></div>
                            <h3>Bulk Creation </h3>
                            <p>Create and edit many QR codes in no time.</p>
                        </div>

                        <div className="ideas">
                            <div className="icon_ideas"> <i class="fa fa-bar-chart" aria-hidden="true"></i></div>
                            <h3> Scan statistics</h3>
                            <p>Track your QR codes and get insights about scans.</p>
                        </div>

                        <div className="ideas">
                            <div className="icon_ideas"> <i class="fa fa-paint-brush" aria-hidden="true"></i> </div>
                            <h3>Stylize your design </h3>
                            <p>Create transparent QR codes and reusable designs.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container steps-section">
                <h2 className="heading">How to create a QR ?</h2>
                <div className="container">
                    <div className="left_sec row">

                        <div className="col">
                            <h3>Select which type</h3>
                            <p>You may choose from URL, vCard, Plain Text, Email, SMS, Twitter, WiFi, and Bitcoin. However, these free QR Codes are not editable and trackable.</p>
                        </div>
                        <div className="col">
                            <img src={type} />
                        </div>
                    </div>
                    <div className="right_sec row">

                        <div className="col">
                            <img src={details} />
                        </div>
                        <div className="col">
                            <h3>Fill in the details</h3>
                            <p>Enter all the information needed in the fields that appear. This could be a link, contact information, text or any other type of info. Once you’re done, select “Generate.”</p>
                        </div>
                    </div>

                    <div className="left_sec row">

                        <div className="col">
                            <h3>Download the QR Code</h3>
                            <p>
                                You may choose from URL, vCard, Plain Text, Email, SMS, Twitter, WiFi, and Bitcoin. However, these free QR Codes are not editable and You may choose to have a standard black and white design or choose colors and frames to help you attract more scans. If not, proceed to download your finished Code..</p>
                        </div>
                        <div className="col">
                            <img src={qr} />
                        </div>
                    </div>
                </div>
            </div>



            <div className="container type-section">
                <h2 className="heading">What type of QR can we make ?</h2>
                <p>We offer these Static QR Codes that are completely for free and will never expire.<br /> Once generated, it’s yours forever but you will not be able to edit the content or track its scans.</p>
                <div className="container row type-block">
                    <div className="col">
                        <div className="block">
                            <h3><i class="fa fa-link" aria-hidden="true"></i> URL</h3>
                            <p>Use this type to open a link to a webpage, contact form, or Youtube.</p>
                        </div>
                        <div className="block">
                            <h3><i class="fa fa-wifi" aria-hidden="true"></i> Wi-Fi</h3>
                            <p>Use this type to connect to a WiFi network without typing the password.</p>
                        </div>
                        <div className="block">
                            <h3><i class="fa fa-address-card" aria-hidden="true"></i> V-Card</h3>
                            <p>Use this type to create a digital business card with save to phone feature.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="block">
                            <h3><i class="fa fa-font" aria-hidden="true"></i> Text</h3>
                            <p>Use this type to display text in any language, of up to 300 characters.</p>
                        </div>
                        <div className="block">
                            <h3><i class="fa fa-envelope" aria-hidden="true"></i> E-Mail</h3>
                            <p>Use this type to send an email with a predefined message to any email address.</p>
                        </div>
                        <div className="block">
                            <h3><i class="fa fa-btc" aria-hidden="true"></i> Bitcoin</h3>
                            <p>Use this type to request crypto payments from major cryptocurrencies.</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="block">
                            <h3><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</h3>
                            <p>Use this type to post a tweet, complete with a link and hashtags.</p>
                        </div>
                        <div className="block">
                            <h3> <i class="fa fa-file-pdf-o" aria-hidden="true"></i>   PDF</h3>
                            <p>Need editable and trackable functionalities instead? Check out our dynamic codes.</p>
                        </div>
                        <div className="block">
                            <h3><i class="fa fa-product-hunt" aria-hidden="true"></i> Pro</h3>
                            <p>Need editable and trackable functionalities instead? Check out our dynamic codes.</p>
                        </div>
                    </div>
                </div>
                <button className="showmore" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    Show More
                </button>
            </div>

            {/* FAQ Section */}
            <div className="container faq-section">
                <h2 className="heading">Frequently asked questions (FAQs)</h2>

                <div className="container">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Are QR codes free ?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">All of our Static QR Codes are free. This includes URL, vCard, Plain text, Email, SMS, Twitter, WiFi, and Bitcoin. Once created, they are yours forever. The only drawback with these types is that you won’t be able to edit the content, so be sure to always test and make sure they work before printing.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    What is Static QR v/s Dynamic QR ?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Once generated, a Static Code cannot be edited and its scans cannot be tracked. Dynamic Code, on the other hand, is very flexible and is virtually indestructible. You can update its content, change/add links, and fix typos; even after print. You can also track the number of scans, including where and when.</div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Is it possible to count the QR code scans (tracking, analytics, measuring) ?

                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">
                                    You may choose from URL, vCard, Plain Text, Email, SMS, Twitter, WiFi, and Bitcoin. However, these free QR Codes are not editable and You may choose to have a standard black and white design or choose colors and frames to help you attract more scans. If not, proceed to download your finished Code..</div>
                            </div>
                        </div>
                    </div>

                </div>
                <button className="showmore" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    Show More
                </button>
            </div>


            <div className="qna-section">
                <h2 className="heading"> Any more questions ?</h2>
                <div className="container">

                    <p>Fill the form and we'll get back to you</p>
                    <div className="row">
                        <div className="col">
                            <h3>Name</h3>
                            <input type="text" className="qna" placeholder="Enter your name here" />
                        </div>
                        <div className="col">
                            <h3>Name of your company</h3>
                            <input type="text" className="qna" placeholder="Enter your company name here" />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <h3>Phone number</h3>
                            <input type="number" className="qna" placeholder="Enter your phone number here" />
                        </div>
                        <div className="col">
                            <h3>Email id</h3>
                            <input type="email" className="qna" placeholder="Enter your email id here" />
                        </div>

                    </div>
                    <button className="showmore" onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        Submit
                    </button>
                </div>
            </div>


        </>
    )
}
