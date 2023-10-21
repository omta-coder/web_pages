var tl = gsap.timeline()
tl.from("#nav img,#nav h4",{
    y:-50,
    opacity:0,
    
})
tl.from("#left h1,#left p",{
    x:-100,
    opacity:0,
    stagger:.5
})
tl.from("#photo img",{
    x:100,
    scale:0
})
tl.from("#footer,#box",{
    y:100,
    opacity:0,
    stagger:.5
})