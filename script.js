
var tl = gsap.timeline()

tl.from(" #nav,#nav h4,#nav img ,#nav i",{
    y:-50,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.3
})
tl.from("#parent,h1,p",{
    x:-50,
    opacity:0,
    stagger:.3
})
tl.from("#right img",{
    rotate:360,
    duration:1,
    stagger:0.8,
    x:400,
    opacity:0
})
tl.from("#oval",{
    y:50,
    opacity:0,
    stagger:.3
})


var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})
