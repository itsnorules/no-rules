// ================================
// NO RULES - Particles Configuration
// Optimized for Desktop & Mobile Performance
// ================================

const isMobile = window.innerWidth <= 768;

particlesJS("particles-js", {
    particles: {
        number: {
            value: isMobile ? 30 : 75,
            density: {
                enable: true,
                value_area: isMobile ? 600 : 800
            }
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
            value: isMobile ? 2.5 : 3.5,
            random: true
        },
        move: {
            enable: true,
            speed: isMobile ? 1.2 : 2.2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        },
        line_linked: {
            enable: true,
            distance: isMobile ? 110 : 150,
            color: "#ff2a2a",
            opacity: 0.55,
            width: 1
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: !isMobile,
                mode: "grab"
            },
            onclick: {
                enable: false
            },
            resize: false
        },
        modes: {
            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.85
                }
            }
        }
    },
    retina_detect: false
});
