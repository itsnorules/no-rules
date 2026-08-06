// ================================
// NO RULES Website - Main JS (iOS Fast Load)
// ================================

document.addEventListener("DOMContentLoaded", function () {
    // 1. إخفاء اللودر فوراً
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
    document.body.classList.add("loaded");

    // 2. فحص الهواتف (يشمل جميع متصفحات الآيفون)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;

    if (isMobile) {
        // إظهار كافة العناصر فوراً على الموبايل بدون انتظار حركة التمرير
        document.querySelectorAll(".hidden").forEach((el) => {
            el.classList.remove("hidden");
            el.classList.add("reveal");
        });
    } else {
        // تشغيل الأنيميشن للـ PC
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

// Mouse Light Effect (للـ PC فقط لتقليل الضغط على الآيفون)
const mouseLight = document.querySelector(".mouse-light");
if (mouseLight && window.innerWidth > 768) {
    document.addEventListener("mousemove", (e) => {
        mouseLight.style.left = e.clientX + "px";
        mouseLight.style.top = e.clientY + "px";
    });
}
