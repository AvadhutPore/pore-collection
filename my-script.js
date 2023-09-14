// Start SAP 

 gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//     trigger: ".sec",
//     start: "80px 6%",
//     markers: true,
//     toggleClass: {targets: ".my-header", className: "header-active"}
// });


gsap.to("#name-plate",{
    scrollTrigger : {
        scrub: 1
    },
    y : -300,
})
gsap.to("#flore",{
    scrollTrigger : {
        scrub: true
    },
    x : 0,
})
gsap.to("#stand-1",{
    scrollTrigger : {
        scrub: 1
    },
    x : -100,
})
gsap.to("#stand-2",{
    scrollTrigger : {
        scrub: 1
    },
    x : 120,
})
gsap.to("#cap-stand",{
    scrollTrigger : {
        scrub: 1
    },
    y : -200,
    x : 250,
})
gsap.to("#cust-1",{
    scrollTrigger : {
        scrub: 1
    },
    x : -400,
})
gsap.to("#cust-2",{
    scrollTrigger : {
        scrub: 1
    },
    x : 400,
})


// End SAP 



// Mobile-Hamb-Nav-Menu

let navBtn = document.getElementById("mobile-navBtn");

navBtn.onclick = function(){
    navBtn.classList.toggle("open-menu");
}

// End Mobile-Hamb-Nav-Menu

// Add Active class to header on click Hamb-Nav-Btn

const mobile_navBtn = document.querySelector("#mobile-navBtn");
const my_header = document.querySelector(".my-header");

toggleNavbar = () => {
    my_header.classList.toggle("active");
}

mobile_navBtn.addEventListener('click', () => toggleNavbar());

// End Add Active class to header on click Hamb-Nav-Btn


