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