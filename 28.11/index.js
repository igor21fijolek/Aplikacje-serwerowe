// const x = 5
// const y = 10
// console.log(x+y);


// const {getFips} = require('crypto')
const express = require('express')

const app = express()

app.get("/", (req, res)=>{
    console.log(req);
    res.send("Igor Fijołek")
})

app.get("/klasa", (req,res)=>{
    res.send("2PRO")
})
app.get("/abc/:imie/:nazwisko", (req,res)=>{
    const imie = req.params.imie
    const nazwisko = req.params.nazwisko
    res.send(imie + ' ' + nazwisko)
})


app.get("/wynik/:liczba1/:liczba2", (req,res)=>{
    let liczba1 = parseInt(req.params.liczba1)
    let liczba2 = parseInt(req.params.liczba2)
    // res.send("abc")
    res.send(`${liczba1+liczba2}`)
})
app.listen(3000, ()=>{
    console.log("aplikacja działa");
})