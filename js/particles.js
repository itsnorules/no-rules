particlesJS("particles-js", {
    particles: {
        number: {
            value: 85
        },
        color: {
            value: "#ff2a2a" /* لون أسطع وأوضح للعين */
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.85 /* زيادة الشفافية لتبين بوضوح تام */
        },
        size: {
            value: 3.5
        },
        move: {
            enable: true,
            speed: 2.5
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ff2a2a",
            opacity: 0.6 /* خطوط أوضح وأقوى */
        }
    },
    interactivity: {
        events: {
            onhover: {
                enable: true,
                mode: "grab" /* ربط مباشر وملاحظ فوراً مع الماوس */
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            grab: {
                distance: 220,
                line_linked: {
                    opacity: 1
                }
            }
        }
    }
});