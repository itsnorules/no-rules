// ================================
// NO RULES - Particles Configuration
// Lightweight Desktop & Mobile
// ================================

const isMobile = window.innerWidth <= 768;

particlesJS("particles-js", {
    particles: {
        number: {
            value: isMobile ? 12 : 35,
            density: {
                enable: true,
                value_area: isMobile ? 900 : 1000
            }
        },

        color: {
            value: "#ff2a2a"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: isMobile ? 0.45 : 0.6,
            random: true
        },

        size: {
            value: isMobile ? 2 : 3,
            random: true
        },

        move: {
            enable: true,
            speed: isMobile ? 0.6 : 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        },

        line_linked: {
            enable: true,
            distance: isMobile ? 130 : 160,
            color: "#ff2a2a",
            opacity: isMobile ? 0.2 : 0.3,
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

            resize: true
        },

        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 0.5
                }
            }
        }
    },

    retina_detect: false
});
