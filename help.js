//scroll trigger for page 2

let tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 50%",
        scrub:2,
        end:"top 0"
    }
})

tl.from(".page2 .headding",{

    x:-400,
    duration:1,
    opacity:0
})

tl.from(".page2 .cloths .c1",{
    x:-800,
    duration:1
})

tl.from(".page2 .cloths .c3",{
    x:800,
    duration:1
},"-=1")


//scroll trigger page3

let tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        start:"top 50%",
        scrub:2,
        end:"top 0"
    }
})

tl2.from(".page3 .contain .text h1",{

    x:-400,
    opacity:0,
    duration:0.5
})
tl2.from(".page3 .contain .text p",{

    x:-400,
    opacity:0,
    duration:0.5
},"-=0.5")
tl2.from(".page3 .contain .text button",{

   
    opacity:0,
    duration:0.5
})

tl2.from(".page3 .contain  .image img",{

   
    opacity:0,
    duration:0.5
},"-=0.5")



//scroll trigger page4
let tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        start:"top 50%",
        scrub:2,
        end:"top 0"
    }
})

tl3.from(".page4 .contain .men",{
    scale:0,
    duration:0.5
})
tl3.from(".page4 .contain .women",{
    scale:0,
    duration:0.5
},"-=0.5")



//scroll trigger page6

let tl4=gsap.timeline({
    scrollTrigger:{
        trigger:".page6",
        scroller:"body",
        start:"top 50%",
        scrub:2,
        end:"top 0"
    }
})

tl4.from(".page6 .cardd1",{
    x:-500,
    duration:1

})
tl4.from(".page6 .cardd3",{
    x:500,
    duration:1

},"-=1")

tl4.from(".page6 .location .store img",{
    delay:1,
    opacity:0,
    duration:1
})


tl4.from(".page6 .location .locat h1",{
    x:800,
    duration:1
},"-=1")
tl4.from(".page6 .location .locat h4",{
    x:800,
    duration:1
},'-=1')
tl4.from(".page6 .location .locat button",{
    opacity:0,
    duration:1
})