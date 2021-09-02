import React from 'react'

export const Twitter = () => {
    return (
        <div>
            <h1>Twitter</h1>
            <div className="row">
                <div className="email">
                    <h3>Choose an option :</h3>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Post
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Profile
                        </label>
                    </div>
                </div>


                <div className="email">
                    <h3>Text </h3>
                    <textarea class="form-control" placeholder="Enter your text here" id="floatingTextarea"></textarea>
                </div>
                <input class="form-control fileupload" type="file" id="formFile" />
                <div className="email">
                    <button className="btn btn-lg generate">Generate</button>
                </div>

            </div>

        </div >
    )
}
