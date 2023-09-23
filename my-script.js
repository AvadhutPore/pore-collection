
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


// Start SAP 

 gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//     trigger: ".sec",
//     start: "80px 6%",
//     markers: false,
//     toggleClass: {targets: ".my-header", className: "header-active"}
// });





// Start Hero SLider-Animation

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
gsap.to("#left-women",{
    scrollTrigger : {
        scrub: 1
    },
    x : -250,
})
gsap.to("#right-1st-women",{
    scrollTrigger : {
        scrub: 1
    },
    x : 150,
})
gsap.to("#right-2nd-women",{
    scrollTrigger : {
        scrub: 1
    },
    x : 250,
})



// End Hero SLider-Animation


// Start scroll-right-animate



// document.addEventListener("DOMContentLoaded", function () {
//     const photos = gsap.utils.toArray(".right-img:not(:first-child)");
  
//     gsap.set(photos, { yPercent: 200 });
  
//     const animations = gsap.to(photos, {
//       yPercent: 0,
//       duration: 1,
//       stagger: 1,
//     });
  
//     console.log("Photos:", photos);
//     console.log("Animations:", animations);
  
//     ScrollTrigger.create({
//       trigger: ".scroll-wrap",
//       start: "top top",
//       end: "bottom bottom",
//       pin: ".right-side",
//       animation: animations,
//       scrub: true,
//     });
//   });




  
const details = gsap.utils.toArray(".desk-content-wrap:not(:first-child)")
const photos = gsap.utils.toArray(".img-wrap:not(:first-child)")


gsap.set(photos, {yPercent:101})

const allPhotos = gsap.utils.toArray(".img-wrap")


// create
let mm = gsap.matchMedia();

// add a media query. When it matches, the associated function will run
mm.add("(min-width: 991px)", () => {

  // this setup code only runs when viewport is at least 600px wide
  console.log("desktop")
	
  ScrollTrigger.create({
	trigger:".scroll-wrap",
	start:"top top",
	end:"bottom bottom",
	pin:".right-side"
})

//create scrolltrigger for each details section
//trigger photo animation when headline of each details section 
//reaches 80% of window height
details.forEach((detail, index)=> {

	let headline = detail.querySelector(".scroll-content-title")
	let animation = gsap.timeline()
	   .to(photos[index], {yPercent:0})
	   .set(allPhotos[index], {autoAlpha:0})
	ScrollTrigger.create({
		trigger:headline,
		start:"top 80%",
		end:"top 50%",
		animation:animation,
		scrub:true,
		markers:false
	})
})
	
	
  
  return () => { // optional
    // custom cleanup code here (runs when it STOPS matching)
	  console.log("mobile")
  };
});

// End scroll-right-animate

// End SAP 






