const express = require("express")
const mongoose = require("mongoose")

const cors = require("cors")
const User = require("./models/Authentication")
 

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/Authentication")

app.post("/signup", (req, res) => {
    User.create(req.body )
    .then(user => res.json(user))
    .catch(err => res.json(err))  
})

app.post("/signin", (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email})
    .then(user => {
        if (user) {
            if (user.password === password) {
                res.json("Success")
            } else {
                res.json({message: "Incorrect Password"})
            }
        } else {
            res.json({message: "User not found"})
        }
    })
    .catch(err => res.json(err))
})

app.listen(5000, () => {
    console.log("Server is running on port 5000")
})