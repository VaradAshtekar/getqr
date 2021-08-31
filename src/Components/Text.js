import React from 'react'

export const Text = () => {
    return (
        <div>
            <h1>
                Text QR
            </h1>
            <input type="text" className="qna" placeholder="Enter the text that you want to show" />
            <div className="email">
                <button className="btn generate">Generate</button>
            </div>
        </div>
    )
}
