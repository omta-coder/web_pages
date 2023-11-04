

var tl = gsap.timeline();

tl.from("#nav,h2,h5,h4",{
    y:-50,
    opacity:0,
    duration:1,
    stagger:.5
})
tl.from("button,h1,p",{
    opacity:0,
    x:-100,
    duration:1,
    stagger:.5
})
tl.from("#right img",{
    x:`100%`,
    duration:1,
})
