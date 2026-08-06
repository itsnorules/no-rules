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

    // 3. تشغيل تأثير ضوء الماوس للـ PC فقط بطريقة خفيفة على المعالج
    const mouseLight = document.querySelector(".mouse-light");
    if (mouseLight && window.innerWidth > 768) {
        let ticking = false;
        document.addEventListener("mousemove", (e) => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    mouseLight.style.left = e.clientX + "px";
                    mouseLight.style.top = e.clientY + "px";
                    ticking = false;
                });
                ticking = true;
            }
        });
    }
});

// 4. دالة النسخ المضمونة لجميع المتصفحات والموبايل
function copyText(id) {
    const textElement = document.getElementById(id);
    if (!textElement) return;

    const textToCopy = textElement.innerText || textElement.textContent;

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(showToast);
    } else {
        const textArea = document.createElement("textarea");
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast();
        } catch (err) {
            console.error('Copy failed', err);
        }
        document.body.removeChild(textArea);
    }
}

// 5. دالة إظهار إشعار النسخ فوق مكان السكرول الحالي
function showToast() {
    const toast = document.getElementById("toast");
    if (!toast) return;

    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    
    toast.style.position = "absolute";
    toast.style.top = (currentScroll + 30) + "px";

    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}
