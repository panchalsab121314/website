
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


//theer are slider

const slider = document.getElementById("slider")
const slide = document.querySelectorAll(".slide")
let num = 0;
const set_time = setInterval(() => {
    slider_fun(num++)
}, 2000)
function slider_fun(index,i) {
    if (index == slide.length) {
        index = 0
        num = index
    }
    if (index == -1) {
        index = slide.length - 1 
        num = index
    }
    slider.style.transform = `translateX(-${index}00%)`
    slider.style.transition = "all 1s ease-in";
}
