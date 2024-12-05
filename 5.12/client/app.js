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
    const url = `http://localhost:3000/palindrome/${word}`
    let data =  await fetch(url)
   const json = await data.json()
   let tab = [word]

   if(word == tab.reverse()){
    document.getElementById("wynik2").textContent = 'podany wyraz jest palindromem'
   }else{
    document.getElementById("wynik2").textContent = 'podany wyraz nie jest palindromem'
   }
}