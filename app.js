const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

const videoList = [video1, video2, video3].filter(video => video !== null);

videoList.forEach(function(video) {
    video.addEventListener('mouseover', function() {
        video.play();
        if (hoverSign) hoverSign.classList.add("active");
    });
    video.addEventListener('mouseout', function() {
        video.pause();
        if (hoverSign) hoverSign.classList.remove("active");
    });
});





const counter = document.getElementById("counter");
const preloader = document.getElementById("preloader");
const content = document.getElementById("content");

let count = 0;

const interval = setInterval(() => {
  count++;
  counter.textContent = `${count}%`;

  if (count === 100) {
    clearInterval(interval);

    // Add fade-out effect
    preloader.classList.add("fade-out");

    // Show content after preloader disappears
    setTimeout(() => {
      preloader.style.display = "none";
      content.style.display = "block";
    }, 800);
  }
}, 30);  // Adjust speed by changing the interval time





const sections = document.querySelectorAll("h1");
const navLinks = document.querySelectorAll("li a");

window.addEventListener("scroll", () => {
    let current = "";
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});





// Select the arrow
const scrollToTopArrow = document.getElementById("scrollToTop");

// Show/hide arrow on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollToTopArrow.classList.add("show");
    } else {
        scrollToTopArrow.classList.remove("show");
    }
});

// Smooth scroll to top on click
scrollToTopArrow.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});





const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector("ul");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("show");
});
