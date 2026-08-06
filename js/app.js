// ================================
// NO RULES Website - Main JS
// Version 1.0
// ================================

// Fade In Animation & Loader Exit On Page Load
window.addEventListener("load", () => {
   // إخفاء شاشة التحميل وتفعيل الأزرار فوراً
document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById("loader");
    
    function removeLoader() {
        if (loader) {
            loader.classList.add("loader-hidden");
            document.body.classList.add("loaded");
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    }

    // التنفيذ الفوري بمجرد تحميل هيكل الصفحة
    removeLoader();

    // احتياطاً في حال تأخر الاستجابة
    setTimeout(removeLoader, 1000);
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
