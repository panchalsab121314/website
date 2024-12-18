
 let bar = document.getElementById("bar")
 let cross = document.getElementById("cross")
let lines = document.getElementById("lines")
lines.addEventListener('click',()=>{
    bar.style.display='block'
})


cross.addEventListener('click', () => {
    bar.style.display='none'
})