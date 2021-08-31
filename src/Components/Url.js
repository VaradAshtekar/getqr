import React from 'react'

export const Url = () => {
    return (
        <div>
            <h1> URL QR</h1>
            <input className="form-control fileupload" type="file" id="formFile" />
            <div className="email">
                <button className="btn generate">Generate</button>
            </div>
        </div>
    )
}
