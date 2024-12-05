const express = require('express')

const  cors = require('cors')

const app = express()


app.use(cors())
app.get("/suma/:liczba1/:liczba2", (req, res)=>{
    let liczba1 = parseInt(req.params.liczba1)
    let liczba2 = parseInt(req.params.liczba2)
    res.send(`${liczba1+liczba2}`)
})

app.get("/palindrome/:word", (req,res)=>{
    let word = req.params.word
})


app.listen(3000,()=>{
    console.log('aplikacja działa');
})