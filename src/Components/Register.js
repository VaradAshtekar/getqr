import React from 'react'

export const Register = () => {
    return (
        <div className="container login_sec">
            <h3>Create, Manage and Track <span> all your QR Codes in one </span></h3>
            <p>Sign up now and try all features free for 14 days</p>
            <div className="container">

                <div className="dropdown">
                    <button className="btn dropdown-toggle shadow-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Select your industry
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>


                <input type="email" className="qna" placeholder="Work Email" />
                <input type="password" className="qna" placeholder="Password" />


                <div className="dropdown">
                    <button className="btn dropdown-toggle shadow-none" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Where do you want to print ?
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                        I agree with the Terms of service and Privacy policy
                    </label>
                </div>
            </div>


            <button type="button" className="btn showmore">Register</button>

        </div>
    )
}
