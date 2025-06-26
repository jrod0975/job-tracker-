import { div } from "framer-motion/client"
import { useState } from "react"


function SignUp({changeScreen}){

    function joinOnClick(){
        changeScreen("login")
    }

    return <div className="login-container">
       <div className="login-square gradient-border">

        <div className="login-title gradient-text">
            <h1>Track your  rejections!</h1>
        </div>

        <div className="login-fields">
            <input className="user-field" type="text" placeholder="Username"/>
            <input className="password-field" type="password" placeholder="Password"/>
            <input className="password-field" type="password" placeholder="Confirm Password"/>

            <div className="login-button-field">
                <button onClick={joinOnClick} className="login-button">Join!</button>
            </div>
            
        </div>

        

       </div>
    </div>
}



export default SignUp