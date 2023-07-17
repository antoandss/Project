import React from "react";
import "./register.css";

function Register(props) {
    return (
                <div className="pv5 mid-gray sans-serif bg-f0e8f5 register-container">
                    <div className="w-90 w-80-m w-50-l center cf cover bg-top bg-center shadow-1 bg-light-gray register-content" style={{ backgroundImage: 'url(https://source.unsplash.com/MTJxRri1UiI/800x600)' }}>

                        <div className="w-80 w-70-m w-60-l fr bg-white">
                            <header className="pa3 bb b--light-gray relative">
                                <h1 className="b ma0 f3">Register</h1>
                            </header>
                            <form method="POST" id="register-form" action="" className="ph3 pt3 pb4 f7">
                                <div className="mb3">
                                    <label htmlFor="firstName" className="db ttu b lh-copy">First Name</label>
                                    <input name="firstName" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                                </div>
                                <div className="mb3">
                                    <label htmlFor="lastName" className="db ttu b lh-copy">Last Name</label>
                                    <input name="lastName" type="text" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                                </div>
                                <div className="mb3">
                                    <label htmlFor="email-address" className="db ttu b lh-copy">Email</label>
                                    <input name="email-address" type="email" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                                </div>
                                <div className="mb3">
                                    <label htmlFor="password" className="db ttu b lh-copy">Password</label>
                                    <input name="password" type="password" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                                </div>
                                <div className="mb4">
                                    <label htmlFor="confirmPassword" className="db ttu b lh-copy">Confirm Password</label>
                                    <input name="confirmPassword" type="password" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                                </div>
                                <div className="tc">
                                    <input type="submit" value="Sign Up" className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" name="register" onClick={(event) => props.handleClick(event)}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    );
}

export default Register;