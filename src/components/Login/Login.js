import React from "react";
import "./login.css";

function Login(props) {
    return (
        <div className="pv5 mid-gray sans-serif bg-f0e8f5 login-container">
            <div className="w-90 w-80-m w-50-l center cf cover bg-top bg-center shadow-1 bg-light-gray login-content" style={{ backgroundImage: 'url(https://source.unsplash.com/MTJxRri1UiI/800x600)' }}>
                <div className="w-80 w-70-m w-60-l fr bg-white">
                    <header className="pa3 bb b--light-gray relative">
                        <h1 className="b ma0 f3">Login</h1>
                    </header>
                    <form method="POST" id="login-form" action="" className="ph3 pt3 pb4 f7">
                        <div className="mb3">
                            <label htmlFor="email-address" className="db ttu b lh-copy">Email</label>
                            <input name="email-address" type="email" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="mb3">
                            <label htmlFor="password" className="db ttu b lh-copy">Password</label>
                            <input name="password" type="password" className="input-reset w-100 mw-100 bn br1 pa2 bg-light-gray" />
                        </div>
                        <div className="tc">
                            <input type="submit" value="Log In" className="ttu bn pv3 ph4 f6 bg-blue white b br-pill pointer grow" name="login" onClick={(event) => props.handleClick(event)}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;