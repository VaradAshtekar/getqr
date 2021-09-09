import React from 'react'

export const Wifi = () => {
    return (
        <div>
            <h1>Wi-fi QR</h1>
            <div className="row">

                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Wifi Id</h3>
                    <div className="col-sm-9">
                        <input type="text" className="qna" placeholder="Enter your SSID or username" />
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Hidden
                            </label>
                        </div>
                    </div>
                </div>


                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Password</h3>
                    <div className="col-sm-9">
                        <input type="password" className="qna" placeholder="Enter your Wifi password" />

                    </div>
                </div>


                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Encryption</h3>
                    <div className="col-sm-9">
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                            <label class="form-check-label" for="flexRadioDefault1">
                                None
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                                WPA3 / WPA2
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label class="form-check-label" for="flexRadioDefault1">
                                WEP
                            </label>
                        </div>


                    </div>
                </div>


                <div className="email">
                    <button className="btn btn-lg generate">Generate</button>
                </div>

            </div>
        </div>
    )
}
