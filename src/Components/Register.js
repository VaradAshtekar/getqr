import React from 'react'

export const Register = () => {
    return (
        <div className="container login_sec">
            <h3>Create, Manage and Track <span style={{ color: "#8566FF" }}> all your QR Codes in one </span></h3>
            <p>Sign up now and try all features free for 14 days</p>
            <div className="container login_section">

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
                <div className="mb-3">

                    <input type="email" class="qna" id="exampleFormControlInput1" placeholder="Work Email" />
                </div>
                <div className="mb-3">
                    <input type="password" className="qna " placeholder="Password" />
                </div>



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

            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                <label class="form-check-label" for="flexCheckChecked">
                    I agree with the Tearms of service and Privacy policy
                </label>
            </div>


            <button type="button" className="btn showmore">Register</button>

        </div>
    )
}
