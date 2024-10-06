let tl=gsap.timeline();


tl.to(".part1",{
  scrollTrigger:{
    trigger:".part1",
    scroller:"body",
    start:"top 0%",
    end:"bottom 0%",
    // markers: true,
    pin: true
}
})
tl.to(".part2",{

    scrollTrigger:{
        trigger:".part2",
        scroller:"body",
        start:"top -68vh",
        end:"bottom 33%",
        // markers: true,
        pin: true
    }
})
tl.to(".part3",{

    scrollTrigger:{
        trigger:".part3",
        scroller:"body",
        start:"top -10%",
        end:"bottom 42%",
        pin: true
    }
})
tl.to(".project-till",{
  opacity:0,
  scrollTrigger: {
    trigger: ".project-till",
    start: "top 45%",
    end: "top 100%",
    pin:true,
    // scrub: 3,
    // markers:true
}
})
tl.set(".project-text", {xPercent: 0, yPercent: 0}),
tl.from(".project-text", {
      scale: 2,
      opacity: 0,
      scrollTrigger: {
      trigger: ".project-text",
      start: "top 45%",
      end: "+=200",
      scrub: 3
}})

// BACK-TO-TOP

let mybutton = document.getElementById("myBtn");
let pbutton = document.querySelector(".project-button");
let cbutton = document.querySelector(".contact-button");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
    pbutton.style.backgroundColor="rgb(221, 221, 221)";
    pbutton.style.color="rgb(150, 149, 149)"
    cbutton.style.backgroundColor="rgb(221, 221, 221)";
    cbutton.style.color="rgb(150, 149, 149)"
} else {
    mybutton.style.display = "none";
    pbutton.style.backgroundColor="rgb(29, 29, 29)";
    pbutton.style.color="white";
    cbutton.style.backgroundColor="rgb(29, 29, 29)";
    cbutton.style.color="white";



  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




