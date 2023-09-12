
// Start SAP 

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
    trigger: ".sec",
    start: "80px 6%",
    markers: false,
    toggleClass: {targets: ".my-header", className: "header-active"}
});

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