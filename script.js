// Scroll animation
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });
  