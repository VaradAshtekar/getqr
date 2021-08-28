import React from 'react'

export const Email = () => {
    return (
        <div>
            <h1>Email QR</h1>
            <div className="email">
                <h3>Email</h3>
                <input type="email" className="qna" placeholder="Email Id" />
            </div>
            <div className="email">
                <h3>Subject</h3>
                <input type="text" className="qna" placeholder="Subject" />
            </div>
            <div className="email">

                <h3>Body</h3>
                <textarea class="form-control" placeholder="Body" id="floatingTextarea"></textarea>

            </div>
            <button className="btn showmore">Generate</button>

        </div>
    )
}
