import React from 'react'

export const Email = () => {
    return (
        <div>
            <h1>Email QR</h1>
            <div className="email">
                <h3>Email</h3>
                <input type="email" className="qna" placeholder="Enter your Email Id" />
            </div>
            <div className="email">
                <h3>Subject</h3>
                <input type="text" className="qna" placeholder="Enter the Subject" />
            </div>
            <div className="email">

                <h3>Body</h3>
                <textarea class="form-control" placeholder="Enter the Body" id="floatingTextarea"></textarea>

            </div>
            <div className="email">
                <button className="btn generate">Generate</button>
            </div>

        </div>
    )
}
