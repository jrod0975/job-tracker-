import { div } from "framer-motion/client"


function Login({changeScreen}){


    function logInOnClick(){
        changeScreen("dashboard")
    }



    return <div className="login-container">
       <div className="login-square gradient-border">

        <div className="login-title gradient-text">
            <h1>Job Tracker</h1>
        </div>

        <div className="login-fields">
            <input className="user-field" type="text" placeholder="Username"/>
            <input className="password-field" type="text" placeholder="Password"/>

            <div className="login-button-field">
                <button onClick={logInOnClick} className="login-button">Login</button>
            </div>

        </div>

        

       </div>
    </div>
}



export default Login