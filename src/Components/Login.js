import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export const Login = () => {
    return (
        <div className="container login_sec">
            <h3>Create, Manage and Track <span style={{ color: "#8566FF" }}> all your QR Codes in one </span></h3>
            <p>Sign up now and try all features free for 14 days</p>
            <p>No account yet ? Sign In</p>

            <div className="container login_section">


                <div className="mb-3">

                    <input type="email" class="qna" id="exampleFormControlInput1" placeholder="Work Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="qna " placeholder="Password" />
                </div>


            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label class="form-check-label" for="flexCheckDefault">
                    <p>Keep me signed in</p>
                    <p>Forgot password?</p>
                </label>
            </div>

            <Link to="/qrtype/"><button type="button" className="btn showmore"> Log in</button></Link>
            <button type="button" className="btn showmore"><i class="fa fa-google" aria-hidden="true"></i>Sign in with Google</button>

        </div>
    )
}
