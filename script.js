
var tl = gsap.timeline()
tl.from("h3",{
    y:-50,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.3
})
tl.from("h1",{
    x:-300,
    duration:1,
    opacity:0,
    stagger:0.3
})

tl.from("img",{
    rotate:100,
    duration:1,
    stagger:0.8,
    x:400,
    opacity:0
})
tl.from("h4",{
    y:50,
    duration:0.5,
    delay:0.5,
    opacity:0,
    stagger:0.3
})