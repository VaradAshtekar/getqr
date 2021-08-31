import React from 'react'

export const Bitcoin = () => {
    return (
        <div>
            <h1>Bitcoin QR</h1>
            <div className="row">
                <div className="email">
                    <h3>Cryptocurrency </h3>

                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Bitcoin
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Doge
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Ether
                        </label>
                    </div> <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Dash
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Other
                        </label>
                    </div>
                </div>


                <div className="email">

                    <h3>Amount</h3>
                    <input type="email" className="qna" placeholder="Enter the Amount" />
                </div>


                <div className="email">

                    <h3>Reciever</h3>
                    <input type="text" className="qna" placeholder="Enter the Address" />
                </div>


                <div className="email">
                    <h3>Message</h3>
                    <textarea class="form-control" placeholder="Optional" id="floatingTextarea"></textarea>

                </div>

                <div className="email">
                    <button className="btn generate">Generate</button>
                </div>

            </div>

        </div >
    )
}
