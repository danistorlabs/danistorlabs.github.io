// =====================================================
// DANISTOR LABS - MAIN SCRIPT
// =====================================================


// =====================================================
// HERO - EFECTO PARALLAX EN LAS TARJETAS
// =====================================================

const hero = document.querySelector(".hero");

if (hero) {

    const bigCard = document.querySelector(".bigCard");
    const smallCard = document.querySelector(".smallCard");
    const contentCard = document.querySelector(".contentCard");


    hero.addEventListener("mousemove", (e) => {

        // En móviles no necesitamos este efecto
        if (window.innerWidth <= 700) {
            return;
        }


        const x =
            (window.innerWidth / 2 - e.clientX) / 25;

        const y =
            (window.innerHeight / 2 - e.clientY) / 25;


        // GymPro

        if (bigCard) {

            bigCard.style.transform =
                `translate(${x}px, ${y}px)`;

        }


        // StatTap

        if (smallCard) {

            smallCard.style.transform =
                `translate(${x * 1.5}px, ${y * 1.5}px)`;

        }


        // Social Media

        if (contentCard) {

            contentCard.style.transform =
                `translate(${x * 0.8}px, ${y * 0.8}px)`;

        }

    });

}


// =====================================================
// MOBILE MENU
// =====================================================

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


if (mobileMenuButton && mobileMenu) {


    // ---------------------------------------------
    // ABRIR / CERRAR MENU
    // ---------------------------------------------

    mobileMenuButton.addEventListener("click", () => {

        const isOpen =
            mobileMenu.classList.toggle("active");


        mobileMenuButton.classList.toggle(
            "active",
            isOpen
        );


        mobileMenuButton.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // ---------------------------------------------
    // CERRAR AL SELECCIONAR UNA SECCION
    // ---------------------------------------------

    const mobileLinks =
        mobileMenu.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            mobileMenuButton.classList.remove("active");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// =====================================================
// FIN DEL SCRIPT
// =====================================================