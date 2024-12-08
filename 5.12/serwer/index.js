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
    let reversedWord = word.split('').reverse().join('');
    if(word == reversedWord){
        res.json(`słowo ${word} jest palindromem`)
    }else{
        res.json(`słowo ${word} nie jest palindromem`)
    }
})

app.get("/uppercase/:text", (req,res)=>{
    let text = req.params.text
    upperText = text.toUpperCase()
    if(text != upperText){
        res.json(`wyraz przekształcony na duze litery to: ${upperText}`)
    }else if(text == upperText){
        res.json(`wyraz przekształcony na duze litery to: ${upperText}`)
    }else{
        res.json(`wyraz przekształcony na duze litery to: ${upperText}`)
    }
})

app.get("/random/:min/:max", (req,res)=>{
    let min = parseInt(req.params.min)
    let max = parseInt(req.params.max)
    let random = Math.floor(Math.random() * (max - min + 1) + min)
    res.json(`losowa liczba z przedziału od ${min} do ${max} to: ${random}`)
})

app.get("/reverse/:text", (req,res)=>{
    let text = req.params.text
    let reverse = text.split('').reverse().join('');
    res.json(`odwrocony tekst to: ${reverse}`)
})

app.get("/fibonacci/:num", (req,res)=>{
    let num = parseInt(req.params.num)
    let fib = [0,1]
    for(let i=2; i < num; i++){
        fib.push(fib[i-1] + fib[i-2])
    }
    res.json(`ciag fibonacciego to dlugosci ${num} to: ${fib}`)
})

app.get("/dlugosc/:text", (req,res)=>{
    let text = req.params.text
    let text2 = text.length
    res.json(`długośc podanego tekstu to: ${text2}`)
})


app.get("/przelicz/:grade", (req,res)=>{
    let grade = req.params.grade
    let farenheit = grade * 1.8 + 32
    res.json(`${grade} stopni C to: ${farenheit} stopni F`)
})


app.get("/reverseWords/:sentence", (req,res)=>{
    let sentence = req.params.sentence

    let rev = sentence.split(" ").reverse().join(" ")
    res.json(`odwrocone zdanie to: ${rev}`)
})

app.get("/even/:num", (req,res)=>{
    let num  = parseInt(req.params.num)
    if(num % 2 == 0){
        res.json(`liczba ${num} jest parzysta`)
    }else{
        res.json(`liczba ${num} nie jest parzysta`)
    }
})

app.listen(3000,()=>{
    console.log('aplikacja działa'); 
})