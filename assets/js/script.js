const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

// window.addEventListener("scroll", function() {
//   const title = document.getElementById("title");
//   const header = document.getElementById("header");
//   const heroHeight = document.querySelector(".hero").offsetHeight;
//   const headerHeight = header.offsetHeight;

//   if (window.scrollY > heroHeight - headerHeight) {
//     header.classList.add("scrolled");
//     // title.classList.add("scrolled");
//     // for(let link of navLinks) link.classList.add("scrolled");
// } else {
//     header.classList.remove("scrolled");
//     // title.classList.remove("scrolled");
//     // for(let link of navLinks) link.classList.remove("scrolled");
//   }
// });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");
    const link = document.querySelector(`nav a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove("active"));
      link.classList.add("active");
    }
  });
}, {
  threshold: 0.6
});

sections.forEach(section => observer.observe(section));