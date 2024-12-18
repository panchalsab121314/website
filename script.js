
 let bar = document.getElementById("bar")
console.log(bar)




bar.addEventListener('click',()=>{
    // .main{
    //     display:none;
    // }
    console.log('block')
    bar.style.display = `block`
    bar.style.display="block";
})


let cross = document.getElementById("cross")


cross.addEventListener('click', () => {
    console.log("display mone")
})