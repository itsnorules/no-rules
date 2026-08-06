// ================================
// NO RULES Website - Main JS
// ================================

document.addEventListener("DOMContentLoaded", function () {
    // إخفاء اللودر فوراً
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
    document.body.classList.add("loaded");

    // إظهار المحتوى فوراً لمنع التعليق
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        document.querySelectorAll(".hidden").forEach(function (el) {
            el.classList.remove("hidden");
            el.classList.add("reveal");
        });
    } else {
        // حركات الظهور للـ PC
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
    }
});

// Mouse Light Effect
const mouseLight = document.querySelector(".mouse-light");
if (mouseLight) {
    document.addEventListener("mousemove", (e) => {
        mouseLight.style.left = e.clientX + "px";
        mouseLight.style.top = e.clientY + "px";
    });

    document.addEventListener("touchmove", (e) => {
        if (e.touches.length > 0) {
            mouseLight.style.left = e.touches[0].clientX + "px";
            mouseLight.style.top = e.touches[0].clientY + "px";
        }
    }, { passive: true });
}
