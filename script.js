gsap.to("#page2 img",{
    width:"80%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -50%",
        scrub:2,
        pin:true
    }
})
