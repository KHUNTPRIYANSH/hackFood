var navLinks = document.getElementById("nav-links");
// const sec1 = document.getElementById("#home");
// const sec2 = document.getElementById("#about");
// const sec3 = document.getElementById("#service");
// const sec4 = document.getElementById("#post");
// const sec5 = document.getElementById("#review");
// const sec = document.getElementById("#contact");
function showmanu() {
  navLinks.style.right = "0px";
}

function hidemanu() {
  navLinks.style.right = "-200px";
}
// ScrollBtn.addEventListener("click", Scroll2top);

// function Scroll2top() {
//   HeroSection.scrollIntoView({ behavior: "smooth" });
// }
// function Scroll2sec1() {
//   sec1.scrollIntoView({ behavior: "smooth" });
// }
// function Scroll2sec2() {
//   sec2.scrollIntoView({ behavior: "smooth" });
// }
// function Scroll2sec3() {
//   sec3.scrollIntoView({ behavior: "smooth" });
// }
// function Scroll2sec4() {
//   sec4.scrollIntoView({ behavior: "smooth" });
// }
// function Scroll2sec5() {
//   sec5.scrollIntoView({ behavior: "smooth" });
// }
// function Scroll2sec6() {
//   sec6.scrollIntoView({ behavior: "smooth" });
// }
var scrollToTopBtn = document.getElementById("scrollToTopBtn");
function scrollToTop() {
  // Scroll to top logic
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
