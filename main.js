let moon = document.getElementById("moon")
let text =  document.getElementById("text")
let train =  document.getElementById("train")
let desert_moon = document.getElementById("desert-moon")
let man = document.getElementById("man")
let flight = document.getElementById("flight")
let text1 = document.getElementById("text1")


window.addEventListener("scroll",()=>{
    let value = window.scrollY
    moon.style.top = value *.9 + "px";
    text1.style.top = 80 +  value * -0.2+ "%";
    text.style.top = 80 +  value * -0.2+ "%";
    train.style.left = value * 1.5 +"px"

    desert_moon.style.top = value * .3 + "px";
    man.style.left = value * .6 +"px" 
    flight.style.left = value * .9 +"px" 
})

// //progress bar

// let calcScrollValue = ()=>{
//     let scrollProgress = document.getElementById("progress")
//     let pos = document.documentElement.scrollTop
//     console.log(pos);
    
// }

