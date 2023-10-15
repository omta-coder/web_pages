gsap.from("#nav",{
    x:"100%",
    opacity:0
})
gsap.from("#nav i",{
    y:"-100%",
    stagger:0.5,
    opacity:0
})
var tl =gsap.timeline(
    {
        repeat:-1
    }
)
tl.to("#center-image",{
    width:"100%",
    duration:2,
    stagger:2
},'a')