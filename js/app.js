// ================================
// NO RULES Website - Main JS
// Fast Loading & Mobile Responsive
// ================================

document.addEventListener("DOMContentLoaded", function () {
    // 1. إخفاء اللودر فوراً
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
    document.body.classList.add("loaded");

    // 2. إلغاء التأخير وإظهار العناصر فوراً على الموبايل
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // إزالة كلاس hidden وتفعيل التجاوب الفوري على الموبايل
        document.querySelectorAll(".hidden").forEach(function (el) {
            el.classList.remove("hidden");
            el.classList.add("reveal");
        });
    } else {
        // تشغيل أنيميشن الظهور الاحترافي للـ PC فقط
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

// Mouse Light Tracking Effect
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
