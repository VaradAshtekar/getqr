import React from 'react'

export const Email = () => {
    return (
        <div>
            <h1>Email QR</h1>
            <div className="email">

                <h3 className="col-sm-3 col-form-label">Email</h3>
                <div className="col-sm-9">
                    <input type="email" className="qna" placeholder="Enter your Email Id" />

                </div>
            </div>

            <div className="email">

                <h3 className="col-sm-3 col-form-label">Subject</h3>
                <div className="col-sm-9">
                    <input type="text" className="qna" placeholder="Enter the Subject" />

                </div>
            </div>


            <div className="email">

                <h3 className="col-sm-3 col-form-label">Body</h3>
                <div className="col-sm-9">
                    <textarea class="form-control" placeholder="Enter the Body" id="floatingTextarea"></textarea>

                </div>
            </div>


            <div className="email">
                <button className="btn btn-lg generate">Generate</button>
            </div>

        </div>
    )
}
