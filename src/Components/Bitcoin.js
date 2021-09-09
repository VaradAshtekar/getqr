import React from 'react'

export const Bitcoin = () => {
    return (
        <div>
            <h1>Bitcoin QR</h1>
            <div className="row">

                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Cryptocurrency</h3>
                    <div className="col-sm-9">

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
                </div>



                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Amount</h3>
                    <div className="col-sm-9">
                        <input type="email" className="qna" placeholder="Enter the Amount" />
                    </div>
                </div>


                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Reciever</h3>
                    <div className="col-sm-9">
                        <input type="text" className="qna" placeholder="Enter the Address" />
                    </div>
                </div>


                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Message</h3>
                    <div className="col-sm-9">
                        <textarea class="form-control" placeholder="Optional" id="floatingTextarea"></textarea>
                    </div>
                </div>


                <div className="email">
                    <button className="btn btn-lg generate">Generate</button>
                </div>

            </div>

        </div >
    )
}
