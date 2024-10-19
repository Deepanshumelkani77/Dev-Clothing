//for top moveing label
gsap.to(".move div",{

transform:"translateX(-100%)",
duration:8,
repeat:-1,
ease:"none"


})

//slider

let slide=document.querySelectorAll(".slide");

for(let i=0;i<slide.length;++i)
{
    slide[i].style.left=`${i*100}%`;
}

let counter=0;

const slideimage=()=>{

    for(let i=0;i<slide.length;++i)
        {
            slide[i].style.transform=`translateX(-${counter*100}%)`;
        }

}

let prv=document.querySelector(".prv");
prv.addEventListener('click',()=>{

counter--;
if(counter==-1)
{
    counter=slide.length-1;
    for(let i=0;i<slide.length;++i)
        {
            slide[i].style.transform=`translateX(-${counter*100}%)`;
        }
}
slideimage();
console.log("hello")

})

let next=document.querySelector(".next");
next.addEventListener('click',()=>{

counter++;

if(counter==slide.length)
{
    counter=0;
    for(let i=0;i<slide.length;++i)
        {
            slide[i].style.transform=`translateX(-${counter*100}%)`;
        }
}

slideimage();


})




//sidebar navbar

let menu=document.querySelector(".menu i");

menu.addEventListener("click",()=>{
    let navbar=document.querySelector(".navbar");
navbar.style.display="flex";

})

let cross=document.querySelector(".menuu i");
cross.addEventListener("click",()=>{
    let navbar=document.querySelector(".navbar");
navbar.style.display="none";

})




let phoneslide=document.querySelectorAll(".phone-slide");

for(let i=0;i<phoneslide.length;++i)
{
    phoneslide[i].style.left=`${i*100}%`;
}

let counterr=0;

const slideimagee=()=>{

    for(let i=0;i<phoneslide.length;++i)
        {
            phoneslide[i].style.transform=`translateX(-${counterr*100}%)`;
        }

}

let phoneprv=document.querySelector(".phone-prv");
phoneprv.addEventListener('click',()=>{

counterr--;
if(counterr==-1)
{
    counterr=phoneslide.length-1;
    for(let i=0;i<phoneslide.length;++i)
        {
            phoneslide[i].style.transform=`translateX(-${counterr*100}%)`;
        }
}
slideimagee();
console.log("hello")

})

let phonenext=document.querySelector(".phone-next");
phonenext.addEventListener('click',()=>{

counterr++;

if(counterr==phoneslide.length)
{
    counterr=0;
    for(let i=0;i<phoneslide.length;++i)
        {
            phoneslide[i].style.transform=`translateX(-${counterr*100}%)`;
        }
}

slideimagee();


})




//gsap animation

//animation in link

gsap.from(".link p",
    {
        y:-20,
        opacity:0,
        delay:1,
        duration:0.5,
        stagger:0.3
    }
)



let mm=gsap.matchMedia();

//for laptop
mm.add("(min-width:1250px) and (max-width:1600px)",()=>{



//scroll trigger for page 2

let tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 45%",
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
        start:"top 45%",
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
        start:"top 45%",
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
        start:"top 45%",
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


})






mm.add("(min-width:580px) and (max-width:1249px)",()=>{




let tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        start:"top 50%",
        scrub:2,
        end:"top 0",
        markers:true
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
        start:"top 20%",
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
        start:"top 20%",
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
        start:"top 20%",
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



})




mm.add("(min-width:0px) and (max-width:427px)",()=>{





})

