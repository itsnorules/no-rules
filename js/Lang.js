// ================================
// NO RULES - Multi-Language System
// ================================

const translations = {
    en: {
        // Nav
        navHome: "Home",
        navSupport: "Support",
        navAbout: "About",

        // Hero
        heroTagline: "Story Games • Football • FPS • Chill Streams",
        btnWatchLive: "WATCH LIVE",
        btnSupport: "SUPPORT",

        // About
        aboutTitle: "ABOUT ME",
        aboutText: "Welcome! I'm Feras, also known as <strong>NO RULES</strong>. I stream story-driven games, football games, FPS titles, and everything fun. My goal is simple: create an awesome community where everyone enjoys gaming together.",
        statStory: "Story Games",
        statFootball: "Football",
        statFps: "FPS Games",
        statCommunity: "Community",

        // Journey
        journeyTitle: "MY JOURNEY",
        journeyText: "Every great setup starts somewhere. I'm currently streaming and creating content while building my dream gaming setup. Thanks for being part of the journey. ❤️",
        jDevice: "Current Device",
        jGraphics: "Graphics",
        jGoal: "Goal",
        jGoalText: "Build My Dream Gaming PC",
        jCommunity: "Community",
        jCommunityText: "Growing Together Every Stream",

        // Socials & Footer
        followTitle: "FOLLOW ME",
        footerTag: "No Rules. Just Great Games.",
        footerRights: "All Rights Reserved.",

        // Support Page
        suppHeaderTitle: "SUPPORT NO RULES",
        suppDesc: "If you enjoy my streams and want to support the journey, you can donate using one of the methods below. Thank you for every bit of support ❤️",
        btnCopyBinance: "Copy Binance ID",
        btnCopyAddress: "Copy Address",
        toastCopied: "Address Copied Successfully!",
        footerSuppTag: "Thanks for supporting the journey ❤️"
    },
    ar: {
        // Nav
        navHome: "الرئيسية",
        navSupport: "الدعم",
        navAbout: "حولي",

        // Hero
        heroTagline: "ألعاب القصة • كرة القدم • ألعاب التصويب • بثوث ممتعة",
        btnWatchLive: "شاهد البث المباشر",
        btnSupport: "ادعم القناة",

        // About
        aboutTitle: "حولي",
        aboutText: "أهلاً بك! أنا فراس، والمعروف بـ <strong>NO RULES</strong>. أقوم ببث ألعاب القصة، ألعاب كرة القدم، ألعاب التصويب وكل ما هو ممتع. هدفي بسيط: بناء مجتمع رهيب يستمتع بالألعاب معاً.",
        statStory: "ألعاب القصة",
        statFootball: "كرة القدم",
        statFps: "ألعاب التصويب",
        statCommunity: "المجتمع",

        // Journey
        journeyTitle: "رحلتي",
        journeyText: "كل سيت أب عظيم يبدأ من مكان ما. أقوم حالياً بالبث وصناعة المحتوى أثناء بناء سيت أب الأحلام. شكراً لأنك جزء من هذه الرحلة. ❤️",
        jDevice: "الجهاز الحالي",
        jGraphics: "كرت الشاشة",
        jGoal: "الهدف",
        jGoalText: "بناء بيسي الأحلام للألعاب",
        jCommunity: "المجتمع",
        jCommunityText: "ننمو معاً في كل بث",

        // Socials & Footer
        followTitle: "تابعني",
        footerTag: "لا قواعد. فقط ألعاب عظيمة.",
        footerRights: "جميع الحقوق محفوظة.",

        // Support Page
        suppHeaderTitle: "ادعم NO RULES",
        suppDesc: "إذا كنت تستمتع بالبثوث وتريد دعم الرحلة، يمكنك التبرع باستخدام إحدى الطرق أدناه. شكراً لكل دعم تقدمه ❤️",
        btnCopyBinance: "نسخ معرف بايننس",
        btnCopyAddress: "نسخ العنوان",
        toastCopied: "تم نسخ العنوان بنجاح!",
        footerSuppTag: "شكراً لدعمك الرحلة ❤️"
    }
};

function setLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    const langBtn = document.getElementById("lang-toggle-btn");
    if (langBtn) {
        langBtn.innerText = lang === "ar" ? "English 🇺🇸" : "العربية 🇸🇦";
    }

    localStorage.setItem("norules_lang", lang);
}

function toggleLanguage() {
    const currentLang = localStorage.getItem("norules_lang") || "en";
    const newLang = currentLang === "en" ? "ar" : "en";
    setLanguage(newLang);
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("norules_lang") || "en";
    setLanguage(savedLang);
});