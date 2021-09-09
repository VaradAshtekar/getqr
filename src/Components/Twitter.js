import React from 'react'

export const Twitter = () => {
    return (
        <div>
            <h1>Twitter</h1>
            <div className="row">

                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Choose an option</h3>
                    <div className="col-sm-9">

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
                </div>


                <div className="email">

                    <h3 className="col-sm-3 col-form-label">Text</h3>
                    <div className="col-sm-9">
                        <textarea class="form-control" placeholder="Enter your text here" id="floatingTextarea"></textarea>

                    </div>
                </div>

                <div className="email">
                    <input class="form-control fileupload" type="file" id="formFile" />


                </div>

                <div className="email">
                    <button className="btn btn-lg generate">Generate</button>
                </div>

            </div>

        </div >
    )
}
