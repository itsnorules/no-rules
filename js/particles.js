// ================================
// NO RULES - Particles Configuration
// Optimized for Desktop & Mobile Performance
// ================================

const isMobile = window.innerWidth <= 768;

particlesJS("particles-js", {
    particles: {
        number: {
            value: isMobile ? 25 : 85 // تقليل العدد للموبايل لتخفيف العبء
        },
        color: {
            value: "#ff2a2a"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.85
        },
        size: {
            value: isMobile ? 2.5 : 3.5
        },
        move: {
            enable: true,
            speed: isMobile ? 1.5 : 2.5
        },
        line_linked: {
            enable: true,
            distance: isMobile ? 100 : 150,
            color: "#ff2a2a",
            opacity: 0.6
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !isMobile, // تفعيل التفاعل للـ PC فقط وإلغاؤه للموبايل لتشغيل الأزرار
                mode: "grab"
            },
            onclick: {
                enable: !isMobile,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 220,
                line_linked: {
                    opacity: 1
                }
            }
        }
    },
    retina_detect: true
});
