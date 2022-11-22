//** animas REVEALS **// // ¯\_(ツ)_/¯ \\
function reveal() {
  var reveals = document.querySelectorAll(".reveal"); 
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var position = reveals[i].getBoundingClientRect();
    if (position.top < windowHeight && position.bottom >= 0) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
reveal();

//** GSAP - scrollTrigger **//
let viewportWidth = window.innerWidth;
 if (viewportWidth > 992) {
  let fullPictureSection = document.querySelector(".fullPicture");
  let cards = document.querySelector(".fullPicture__cards");
  let tl = gsap
    .timeline({
      scrollTrigger: {
        trigger: fullPictureSection,
        start: "top top",
        end: "200% 100%",
        pin: true,
        scrub: 5.5
      },
    })
    .add('start')
    .to(cards, 6000, {
      yPercent: -130
    }, 'start')
} 