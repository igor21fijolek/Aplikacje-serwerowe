// const x = 5
// const y = 10
// console.log(x+y);


const { getFips } = require('crypto')
const exepress = require('express')

const app = exepress()

// app.get("/", (req, res)=>{
//     console.log(req);
//     res.send("Igor Fijołek")
// })

// app.get("/klasa", (req,res)=>{
//     res.send("2PRO")
// })
// app.get("/:imie/:nazwisko", (req,res)=>{
//     const imie = req.params.imie
//     const nazwisko = req.params.nazwisko
//     res.send(imie, + ' ', nazwisko)
// })


app.get("/:liczba1/:liczba2", (req,res)=>{
    let liczba1 = req.params.liczba1
    let liczba2 = req.params.liczba2
    console.log(parseInt(liczba1) + parseInt(liczba2));
})
app.listen(3000, ()=>{
    console.log("aplikacja działa");
})