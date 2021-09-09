import React from 'react'
import './Pro.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const SocialMediaqr = () => {
    return (
        <div className="webqr">


            <h1> <i class="fa fa-link" aria-hidden="true"></i> Social Media QR name</h1>

            <div className="grid">
                <div className="webdetails">


                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button shadow-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Basic Information
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne">
                                <div class="accordion-body">


                                    <div className="email">

                                        <h3 className="col-sm-3 col-form-label">Headline* :</h3>
                                        <div className="col-sm-9">
                                            <input type="email" className="qna" placeholder="Connect with us on social media" />

                                        </div>
                                    </div>


                                    <div className="email">

                                        <h3 className="col-sm-3 col-form-label">About us :</h3>
                                        <div className="col-sm-9">
                                            <input type="email" className="qna" placeholder="Follow us and get updates delivered to your favorite social media channel." />

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">

                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo">
                                <div class="accordion-body">





                                    <div className="email">

                                        <h3 className="col-sm-3 col-form-label">Website</h3>
                                        <div className="col-sm-9">

                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">URL</span>
                                                <input type="text" className="form-control" placeholder="www.your-website.com" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>


                                        </div>
                                    </div>


                                    <div className="email">

                                        <h3 className="col-sm-3 col-form-label"><i class="fa fa-globe" aria-hidden="true"></i>

                                        </h3>
                                        <div className="col-sm-9">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">Text</span>
                                                <input type="text" className="form-control" placeholder="Enter your text here" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>


                                        </div>
                                    </div>


                                    <div className="email">

                                        <h3 className="col-sm-3 col-form-label">Facebook</h3>
                                        <div className="col-sm-9">

                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">URL</span>
                                                <input type="text" className="form-control" placeholder="www.yourfacebook/page.com" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>


                                        </div>
                                    </div>


                                    <div className="email">

                                        <h3 className="col-sm-3 col-form-label"><i class="fa fa-facebook" aria-hidden="true"></i></h3>
                                        <div className="col-sm-9">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">Text</span>
                                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>

                                        </div>
                                    </div>


                                    <div className="email">

                                        <h3 className="col-sm-3 col-form-label">Youtube</h3>
                                        <div className="col-sm-9">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">URL</span>
                                                <input type="text" className="form-control" placeholder="www.you- you tube/channel.com" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="email">

                                        <h3 className="col-sm-3 col-form-label"><i class="fa fa-youtube-play" aria-hidden="true"></i>
                                        </h3>
                                        <div className="col-sm-9">
                                            <div className="input-group mb-3">
                                                <span className="input-group-text" id="basic-addon1">URL</span>
                                                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                            </div>

                                        </div>
                                    </div>

                                    <div className="email">

                                        <h3 className="col-sm-3 col-form-label">Click to add :</h3>
                                        <div className="col-sm-9">
                                            <div className="row">
                                                <i class="fa fa-reddit-alien" aria-hidden="true"></i>

                                            </div>
                                            <div className="row">

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Welcome screen
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div className="email">

                                        <h3 className="col-sm-3 col-form-label">Image :</h3>
                                        <div className="col-sm-9">
                                            <div className="row">
                                                <input className="form-control fileupload" type="file" id="formFile" />

                                            </div>
                                            <div className="row">
                                                <div className="col-sm-8">

                                                </div>
                                                <div className="col-sm-4">
                                                    <button className="btn generate">Change Image</button>
                                                    <button className="btn generate">Preview</button>

                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingFour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Design and Customization
                                </button>
                            </h2>
                            <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour">
                                <div class="accordion-body">

                                    <div className="email">

                                        <h3 className="col-sm-3 col-form-label">Colours :</h3>
                                        <div className="col-sm-9">
                                            <label for="exampleColorInput" class="form-label">Color picker</label>
                                            <input type="color" class="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color" />

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>









                </div>
                <div className="qrcode">
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label class="form-check-label" for="flexSwitchCheckDefault">QR Code</label>
                    </div>

                    <div className="qrimage">

                    </div>
                    <Link to="/dashboard">
                        <button className="btn generate">Generate</button>
                    </Link>
                </div>

            </div>

        </div>
    )
}
