var tl = gsap.timeline()

tl.from("nav img,nav h4",{
    y:-50,
    opacity:0,
    duration:1,
    stagger:.5
})
tl.from("h1",{
    opacity:0,
    x:-100,
    duration:1,
    stagger:.4
})
tl.from("#right img",{
    opacity:0,
    x:100,
    duration:1,
    rotateY:90
})
tl.from("button",{
    opacity:0,
    y:50,
    duration:1,
})
