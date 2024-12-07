let inp1 = document.getElementById("liczba1")
let inp2 = document.getElementById("liczba2")
let btn = document.querySelector("button")
let p = document.getElementById("wynik")

 
// async function getData(){
//     const url = `http://localhost:3000/suma/${inp1.value}/${inp2.value}`
//     let data =  await fetch(url)
//    const json = await data.json()
//     return json
// }
// btn.addEventListener("click" , async function(){
//     let wynik = await getData()
//     p.innerHTML = `wynik to ${wynik}`
// })



async function palindrom(){ 
    let word = document.getElementById("zad2").value
    let data =  await fetch(`http://localhost:3000/palindrome/${word}`)
    const wynik = await data.json()
    document.getElementById("wynik2").innerHTML = wynik
}

async function duzeLitery(){
    let text = document.getElementById("zad3").value
    let data =  await fetch(`http://localhost:3000/uppercase/${text}`)
    const wynik = await data.json()
    document.getElementById("wynik3").innerHTML = wynik
}

async function losujLiczbe(){
    let min = document.getElementById("l1").value
    let max = document.getElementById("l2").value
    let data =  await fetch(`http://localhost:3000/random/${min}/${max}`)
    const wynik = await data.json()
    document.getElementById("wynik4").innerHTML = wynik
}

async function odwrotnyWyraz(){
    let text = document.getElementById("zad5").value
    let data =  await fetch(`http://localhost:3000/reverse/${text}`)
    const wynik = await data.json()
    document.getElementById("wynik5").innerHTML = wynik
}

async function length() {
    let text = document.getElementById("zad6").value
    let data =  await fetch(`http://localhost:3000/dlugosc/${text}`)
    const wynik = await data.json()
    document.getElementById("wynik6").innerHTML = wynik
}

async function fibonacci() {
    let num = document.getElementById("zad7").value
    let data =  await fetch(`http://localhost:3000/fibonacci/${num}`)
    const wynik = await data.json()
    document.getElementById("wynik7").innerHTML = wynik
}

async function przelicz() {
    let grade = document.getElementById("zad8").value
    let data =  await fetch(`http://localhost:3000/przelicz/${grade}`)
    const wynik = await data.json()
    document.getElementById("wynik8").innerHTML = wynik    
}
async function zdanie() {
    let sentence = document.getElementById("zad9").value
    let data =  await fetch(`http://localhost:3000/reverseWords/${sentence}`)
    const wynik = await data.json()
    document.getElementById("wynik9").innerHTML = wynik  
}
async function czyEven() {
    let num = document.getElementById("zad10").value
    let data =  await fetch(`http://localhost:3000/even/${num}`)
    const wynik = await data.json()
    document.getElementById("wynik10").innerHTML = wynik  
    
}
