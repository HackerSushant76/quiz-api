const express = require("express")
const cors = require("cors")
const { connection } = require("./config/db")
const { getQuestions, postQuestions, checkQuestion } = require("./controllers/quiz.controller")
require("dotenv").config()
const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("welcome to quiz api")
})

app.post("/addques" , postQuestions)
app.get("/quiz", getQuestions)
app.post("/quiz/check", checkQuestion)
app.listen(PORT , async()=>{
    try{
        await connection
        console.log("connction to db is successful")
    }
    catch(err){
        console.log(err)
    }
    console.log(`listening at port -- ${PORT}`)
})