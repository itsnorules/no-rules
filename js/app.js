// ================================
// NO RULES Website - Main JS
// Version 1.0
// ================================

// إخفاء شاشة التحميل وتفعيل الأزرار فوراً عند جاهزية العناصر
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

    // التنفيذ الفوري
    removeLoader();

    // احتياطاً في حال تأخر أي عنصر
    setTimeout(removeLoader, 800);
});

// Mouse Light Tracking Effect (مع دعم حركة اللمس للموبايل)
const mouseLight = document.querySelector(".mouse-light");

if (mouseLight) {
    // حركة الماوس للـ PC
    document.addEventListener("mousemove", (e) => {
        mouseLight.style.left = e.clientX + "px";
        mouseLight.style.top = e.clientY + "px";
    });

    // حركة اللمس للموبايل
    document.addEventListener("touchmove", (e) => {
        if (e.touches.length > 0) {
            mouseLight.style.left = e.touches[0].clientX + "px";
            mouseLight.style.top = e.touches[0].clientY + "px";
        }
    }, { passive: true });
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
