let bar = document.getElementById("bar")
let cross = document.getElementById("cross")
let hello = document.getElementById("hello")
let slider_complete = document.getElementById("slider_complete")


hello.addEventListener('click', () => {
    bar.style.display = 'block'
    slider_complete.style.display = 'none'
})
cross.addEventListener('click', () => {
    bar.style.display = 'none'
    slider_complete.style.display = 'block'
})


//theer are slider
const slider = document.getElementById("slider")
const slide = document.querySelectorAll(".slide")
let num = 0;
const set_time = setInterval(() => {
    slider_fun(num++)
}, 2000)
function slider_fun(index, i) {
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

// there areparts off inpute serch
let input = document.getElementById('input')
let mouse = document.querySelectorAll('.mouse')
let text_mouse = document.querySelectorAll('text_mouse')
let Jackets = document.querySelectorAll('Jackets')

input.addEventListener('input', () => {
    let display_none_before_serch = document.querySelector('.display_none_before_serch')
    let data = input.value
    console.log(data)
    for (let i = 0; i < mouse.length; i++) {
        const h2 = mouse[i].getElementsByTagName('h2')[0].textContent;
        if (h2.toLocaleLowerCase().includes(data.toLocaleLowerCase())) {
            mouse[i].style.display = "block"
        } else {
            mouse[i].style.display = "none"
             display_none_before_serch.style.display = "none"
        }
    }
})
// there areparts off inpute serchbar in phone formet
let display_none_before_serch = document.querySelector('.display_none_before_serch')
let typeing = document.getElementById('typeing')
typeing.addEventListener('input', () => {
    let data = typeing.value
    console.log(data)
    for (let i = 0; i < mouse.length; i++) {
        const h2 = mouse[i].getElementsByTagName('h2')[0].textContent;
        if (h2.toLocaleLowerCase().includes(data.toLocaleLowerCase())) {
            mouse[i].style.display = "block"
        } else {
            mouse[i].style.display = "none"
            display_none_before_serch.style.display = "none"
        }
    }

})

