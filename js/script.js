//  <!-- Menu Navbar Underline -->

setTimeout(() => {
  document.querySelector(".nav-link.active").classList.add("animate-underline");
}, 100);

// <!-- Current Year Script -->

const year = new Date().getFullYear();
document.getElementById(
  "copyright"
).textContent = `this website was designed and coded by © dan finley ${year}`;
