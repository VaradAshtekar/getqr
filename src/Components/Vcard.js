import React from 'react'

export const Vcard = () => {
    return (
        <div>
            <h1>V- Card QR</h1>

            <div className="row">
                <div className="email">

                    <h3>Name </h3>
                    <input type="text" className="qna_short" placeholder="Enter your First name" />
                    <input type="text" className="qna_short" placeholder="Enter your last name" />
                </div>

                <div className="email">
                    <h3>Contact </h3>
                    <input type="phone" className="qna_short" placeholder="Enter phone number" />
                    <input type="phone" className="qna_short" placeholder="Enter FAX number" />
                </div>

                <div className="email">
                    <h3>Email </h3>
                    <input type="email" className="qna" placeholder="Enter your Email Id @" />
                </div>

                <div className="email">
                    <h3>Company </h3>
                    <input type="text" className="qna" placeholder="Company name" />
                    <input type="text" className="qna" placeholder="Your role" />
                </div>

                <div className="email">

                    <h3>Address </h3>
                    <input type="text" className="qna" placeholder="Building number, Street" />
                    <input type="text" className="qna_short" placeholder="City" />
                    <input type="text" className="qna_short" placeholder="ZIP Code" />
                </div>

                <div className="email">
                    <h3>State </h3>
                    <input type="text" className="qna" placeholder="Enter your state" />
                </div>

                <div className="email">
                    <h3>Country </h3>
                    <input type="text" className="qna" placeholder="Enter your country" />
                </div>

                <div className="email">
                    <h3>Website </h3>
                    <input type="text" className="qna" placeholder="www.enter your website.com" />
                </div>

                <div className="email">
                    <h3>Any Note </h3>
                    <textarea class="form-control" placeholder="Any Note" id="floatingTextarea"></textarea>

                </div>

                <div className="email">
                    <button className="btn btn-lg generate">Generate</button>
                </div>
            </div>

        </div>
    )
}
