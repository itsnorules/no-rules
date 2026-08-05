// ================================
// NO RULES Website - Main JS
// Version 1.0
// ================================

// Fade In Animation & Loader Exit On Page Load
window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    const loader = document.getElementById("loader");
    if (loader) {
        setTimeout(() => {
            loader.classList.add("loader-hidden");
        }, 1200);
    }
});

// Mouse Light Tracking Effect
const mouseLight = document.querySelector(".mouse-light");

if (mouseLight) {
    document.addEventListener("mousemove", (e) => {
        mouseLight.style.left = e.clientX + "px";
        mouseLight.style.top = e.clientY + "px";
    });
}

// Scroll Reveal Observer Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));