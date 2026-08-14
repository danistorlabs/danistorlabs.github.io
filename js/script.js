// ==============================
// LANGUAGE MANAGER
// ==============================

let currentLanguage = "en";

// ------------------------------
// Cambiar idioma
// ------------------------------

function setLanguage(language) {

    currentLanguage = language;

    localStorage.setItem("language", language);

    const texts =
        language === "es"
            ? spanish
            : english;

    // Navbar

    document.getElementById("navbarApps").textContent =
        texts.navbarApps;

    document.getElementById("navbarServices").textContent =
        texts.navbarServices;

    document.getElementById("navbarPortfolio").textContent =
        texts.navbarPortfolio;

    document.getElementById("navbarAbout").textContent =
        texts.navbarAbout;

    document.getElementById("navbarContact").textContent =
        texts.navbarContact;

    document.getElementById("letsTalk").textContent =
        texts.letsTalk;

    // Hero

    document.getElementById("heroSmall").textContent =
        texts.heroSmall;

    document.getElementById("heroTitle").textContent =
        texts.heroTitle;

    document.getElementById("heroText").textContent =
        texts.heroText;

    document.getElementById("exploreApps").textContent =
        texts.exploreApps;

    document.getElementById("contactUs").textContent =
        texts.contactUs;

}

// ==============================
// BUTTON EVENTS
// ==============================

document
    .getElementById("spanishButton")
    .addEventListener("click", () => {

        setLanguage("es");

    });

document
    .getElementById("englishButton")
    .addEventListener("click", () => {

        setLanguage("en");

    });

    // ==============================
// INITIAL LANGUAGE
// ==============================

const savedLanguage =
    localStorage.getItem("language");

if (savedLanguage) {

    setLanguage(savedLanguage);

} else {

    const browserLanguage =
        navigator.language;

    if (browserLanguage.startsWith("es")) {

        setLanguage("es");

    } else {

        setLanguage("en");

    }

}

<script>
const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;

    document.querySelector(".bigCard").style.transform =
        `translate(${x}px, ${y}px)`;

    document.querySelector(".smallCard").style.transform =
        `translate(${x * 1.5}px, ${y * 1.5}px)`;
});
</script>