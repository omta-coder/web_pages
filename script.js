var tl = gsap.timeline()
tl.from("#nav h4",{
    y:-50,
    opacity:0,
    duration:.8,
    stagger:.2
})
tl.from("#center h1,#center p,button",{
    x:-100,
    opacity:0,
    stagger:.2
})
tl.from("#right img",{
    x:100,
    opacity:0,
})

gsap.to("#page2 h1",{
    transform:`translateX(-280%)`,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        strat:"top 0",
        end:"top -150%",
        scrub:2,
        pin:true
    }
})

gsap.to("#page3 img",{
    width:`100%`,
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        strat:"top 30%",
        end:"top -60%",
        scrub:2,
        pin:true
    }
})