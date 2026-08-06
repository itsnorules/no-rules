// ================================
// NO RULES Website - Optimized JS
// ================================

document.addEventListener("DOMContentLoaded", function () {
    // 1. إخفاء اللودر فوراً وبسلاسة
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.opacity = "0";
        setTimeout(() => {
            loader.style.display = "none";
        }, 300);
    }
    document.body.classList.add("loaded");

    // 2. تفعيل الاستجابة الفورية للهواتف لرفع الأداء
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768;

    if (isMobile) {
        document.querySelectorAll(".hidden").forEach((el) => {
            el.classList.remove("hidden");
            el.classList.add("reveal");
        });
    } else {
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

// تشغيل تأثير ضوء الماوس للـ PC فقط
const mouseLight = document.querySelector(".mouse-light");
if (mouseLight && window.innerWidth > 768) {
    document.addEventListener("mousemove", (e) => {
        mouseLight.style.left = e.clientX + "px";
        mouseLight.style.top = e.clientY + "px";
    });
}

// 3. دالة نسخ النصوص وإظهار الإشعار بشكل متجاوب
function copyText(id) {
    const textElement = document.getElementById(id);
    if (!textElement) return;

    const textToCopy = textElement.innerText || textElement.textContent;

    navigator.clipboard.writeText(textToCopy).then(() => {
        const toast = document.getElementById("toast");
        if (toast) {
            toast.classList.add("show");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 2000);
        }
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
}
