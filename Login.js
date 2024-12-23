let bar = document.getElementById("bar")
let cross = document.getElementById("cross")
let hello = document.getElementById("hello")
let slider_complete = document.getElementById("slider_complete")


hello.addEventListener('click',()=>{
    bar.style.display='block'
    slider_complete.style.display='none'
})
cross.addEventListener('click', () => {
    bar.style.display = 'none'
     slider_complete.style.display='block'
})