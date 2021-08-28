import React from 'react'

export const Wifi = () => {
    return (
        <div>
            <h1>Wi-fi</h1>
            <div className="row">
                <div className="email">

                    <h3>Wifi Id :</h3>
                    <input type="text" className="qna" placeholder="Enter your SSID or username" />
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" for="flexCheckDefault">
                            Hidden
                        </label>
                    </div>
                </div>

                <div className="email">
                    <h3>Password :</h3>
                    <input type="password" className="qna" placeholder="Enter your Wifi password" />
                </div>


                <div className="email">

                    <h3>Encryption :</h3>
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

                <button className="showmore">Generate</button>

            </div>
        </div>
    )
}
