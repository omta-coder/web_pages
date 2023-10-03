
var tl = gsap.timeline({
    repeat:-1
});

tl.to(".imagecontainer",{
    width:"100%",
    ease:Expo.easeInOut,
    duration:1,
    stagger:2
},'a')
tl.to(".text h1",{
    ease:Expo.easeInOut,
    stagger:2,
    duration:1,
    top:0
},'a')
tl.to(".text h1",{
    delay:2,
    ease:Expo.easeInOut,
    stagger:2,
    top:"-100%"
},'a')