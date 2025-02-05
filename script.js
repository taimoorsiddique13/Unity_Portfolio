// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Initialize Swiper.js for carousels
const swipers = document.querySelectorAll(".swiper-container");
swipers.forEach((swiper) => {
  new Swiper(swiper, {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// Initialize Particle.js for background effects
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("Particles.js loaded");
});

// Initialize AOS for scroll animations
AOS.init({
  duration: 1000, // Animation duration
  once: true, // Animate only once
});

// Three.js Initialization
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".home").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff88,
  wireframe: true,
});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// GSAP Animations
gsap.from(".home-content h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from(".home-content p", { opacity: 0, y: 50, duration: 1, delay: 1 });
gsap.from(".home-content .btn", { opacity: 0, y: 50, duration: 1, delay: 1.5 });

// Responsive Navigation Menu
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.getElementById("nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Back to Top Button
const backToTopButton = document.getElementById("back-to-top");

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Show/hide the back-to-top button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});
