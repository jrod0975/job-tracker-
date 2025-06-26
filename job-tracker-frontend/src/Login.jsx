import { div } from "framer-motion/client"
import { useState } from "react"
import { useEffect } from "react"


function Login({changeScreen}){

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [message, setMessage] = useState("")


    useEffect(() => {
        async function fetchMessage() {
            try {
                const response = await fetch("http://localhost:5555/test")
                const data = await response.json()
                setMessage(data.message)
            }
            catch (err){
                console.error("There was an error: ", err)
            }
        }

        fetchMessage()
    }, [])





    async function logInOnClick(){
        try{
            const response = await fetch("http://localhost:5555/", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username, password}),
            })
            const data = await response.json()
            console.log(data)

            if (data.success){
                changeScreen("dashboard")
            }
            else{
                alert("No")
            }
        }catch (error){
            console.error("There was an error in the backend", error)
        }
        
    }

    function signUpOnClick(){
        changeScreen("signup")
    }



    return <div className="login-container">
       <div className="login-square gradient-border">

        <div className="login-title gradient-text">
            <h1>Job Tracker</h1>
        </div>

        <h4>{message}</h4>

        <div className="login-fields">
            <input className="user-field" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input className="password-field" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>

            <div className="login-button-field">
                <button onClick={logInOnClick} className="login-button">Login</button>
            </div>
             <div className="login-button-field">
                <button onClick={signUpOnClick} className="login-button">Sign Up</button>
            </div>

        </div>

        

       </div>
    </div>
}



export default Login