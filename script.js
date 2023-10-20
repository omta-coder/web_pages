var main = document.querySelector("#main")
var img = document.querySelector("#main img")

main.addEventListener("mouseenter",function(){
    img.style.height=`500px`
    img.style.width=`600px`
})
main.addEventListener("mouseleave",function(){
    img.style.height=`450px`
})

var tl = gsap.timeline()
tl.from("#nav h4,#nav i",{
    y:-100,
    scale:0,
    duration:1,
    stagger:.8
})
tl.from("h1,p,button",{
    x:-50,
    opacity:0,
    duration:.6,
    stagger:.8
})
tl.from("#main img",{
    x:50,
    scale:0,
    duration:.6,
})