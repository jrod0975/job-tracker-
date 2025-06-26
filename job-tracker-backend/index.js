const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5555;

app.use(cors())

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: "This is the backend"})
})

app.post("/", (req, res) => {
    const {username, password} = req.body
    console.log("Recieved login attempt: ", username, password)

    if (username === "test" && password === "test"){
        res.json({success: true, message: "Login Success"})
    }
    else{
        res.json({success: false, message: "Login Failed"})
    }
})

app.listen(PORT, () =>{
    console.log("Server runnning on port " + PORT)
})