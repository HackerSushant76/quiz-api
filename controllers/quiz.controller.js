const { Ques } = require("../models/question.model")

const getQuestions  =  async(req,res)=>{
    console.log(req.query)
    const {category,difficulty,limit} = req.query  
    const questions = await Ques.find({category,difficulty,limit}).limit(limit)
    res.send(questions)
}

const postQuestions = async(req,res)=>{
    const ques= new Ques(req.body)
    await ques.save()
    res.send("success")
}
const checkQuestion =async(req,res)=>{
    const {id,ans} = req.body
    const ques = await Ques.findOne({_id: id})
    console.log(ques)
    console.log(ans)
    console.log(ques.correct_answer)
    if(ans=== ques.correct_answer){
        res.send("correct")
    }
    else{
        res.send("incorrect")
    }
} 
module.exports = {getQuestions,postQuestions,checkQuestion}