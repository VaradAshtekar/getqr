import React from 'react'

export const Vcard = () => {
    return (
        <div>
            <h1>V- Card QR</h1>

            <div className="row">

                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Name</h3>
                    <div className="col-sm-9">
                        <input type="text" className="qna_short" placeholder="Enter your First name" />
                        <input type="text" className="qna_short" placeholder="Enter your last name" />
                    </div>
                </div>

                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Contact</h3>
                    <div className="col-sm-9">
                        <input type="phone" className="qna_short" placeholder="Enter phone number" />
                        <input type="phone" className="qna_short" placeholder="Enter FAX number" />

                    </div>
                </div>

                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Email</h3>
                    <div className="col-sm-9">
                        <input type="email" className="qna" placeholder="Enter your Email Id @" />
                    </div>
                </div>

                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Company</h3>
                    <div className="col-sm-9">
                        <input type="text" className="qna" placeholder="Company name" />
                        <input type="text" className="qna" placeholder="Your role" />
                    </div>
                </div>

                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Address</h3>
                    <div className="col-sm-9">
                        <input type="text" className="qna" placeholder="Building number, Street" />
                        <input type="text" className="qna_short" placeholder="City" />
                        <input type="text" className="qna_short" placeholder="ZIP Code" />

                    </div>
                </div>


                <div className="email">

                    <h3 className="col-sm-3 col-form-label">State</h3>
                    <div className="col-sm-9">
                        <input type="text" className="qna" placeholder="Enter your state" />

                    </div>
                </div>

                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Country</h3>
                    <div className="col-sm-9">
                        <input type="text" className="qna" placeholder="Enter your country" />

                    </div>
                </div>

                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Website</h3>
                    <div className="col-sm-9">
                        <input type="text" className="qna" placeholder="www.enter your website.com" />
                    </div>
                </div>

                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Any Note</h3>
                    <div className="col-sm-9">
                        <textarea class="form-control" placeholder="Any Note" id="floatingTextarea"></textarea>
                    </div>
                </div>



                <div className="email">
                    <button className="btn btn-lg generate">Generate</button>
                </div>
            </div>

        </div>
    )
}
