// =========================================
// DANISTOR LABS
// MAIN SCRIPT
// =========================================



// =========================================
// MOBILE MENU
// =========================================

const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


if (
    mobileMenuButton &&
    mobileMenu
) {


    // ABRIR / CERRAR

    mobileMenuButton.addEventListener(
        "click",
        () => {


            const isOpen =
                mobileMenu.classList.toggle(
                    "active"
                );


            mobileMenuButton.classList.toggle(
                "active",
                isOpen
            );


            mobileMenuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            mobileMenuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Cerrar menú"
                    : "Abrir menú"
            );


        }
    );



    // CERRAR AL SELECCIONAR

    mobileMenu
        .querySelectorAll("a")
        .forEach(
            (link) => {


                link.addEventListener(
                    "click",
                    () => {


                        mobileMenu
                            .classList
                            .remove(
                                "active"
                            );


                        mobileMenuButton
                            .classList
                            .remove(
                                "active"
                            );


                        mobileMenuButton
                            .setAttribute(
                                "aria-expanded",
                                "false"
                            );


                        mobileMenuButton
                            .setAttribute(
                                "aria-label",
                                "Abrir menú"
                            );


                    }
                );


            }
        );


}



// =========================================
// PORTFOLIO
// PROYECTOS EXPANDIBLES
// =========================================

const projectCards =
    document.querySelectorAll(
        ".projectCard"
    );


projectCards.forEach(
    (card) => {


        const header =
            card.querySelector(
                ".projectHeader"
            );


        if (!header) {
            return;
        }



        header.addEventListener(
            "click",
            () => {


                const wasOpen =
                    card.classList.contains(
                        "is-open"
                    );



                // CERRAR TODAS

                projectCards.forEach(
                    (otherCard) => {


                        otherCard
                            .classList
                            .remove(
                                "is-open"
                            );


                        const
                            otherHeader =
                                otherCard
                                    .querySelector(
                                        ".projectHeader"
                                    );


                        if (
                            otherHeader
                        ) {

                            otherHeader
                                .setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                        }


                    }
                );



                // ABRIR LA SELECCIONADA

                if (!wasOpen) {


                    card
                        .classList
                        .add(
                            "is-open"
                        );


                    header
                        .setAttribute(
                            "aria-expanded",
                            "true"
                        );


                }


            }
        );


    }
);



// =========================================
// HERO PARALLAX
// =========================================

const hero =
    document.querySelector(
        ".hero"
    );


const bigCard =
    document.querySelector(
        ".bigCard"
    );


const smallCard =
    document.querySelector(
        ".smallCard"
    );


const contentCard =
    document.querySelector(
        ".contentCard"
    );



if (hero) {


    hero.addEventListener(
        "mousemove",
        (event) => {


            // No ejecutar en móvil

            if (
                window.innerWidth <= 700
            ) {

                return;

            }



            const x =
                (
                    window.innerWidth / 2
                    -
                    event.clientX
                ) / 25;


            const y =
                (
                    window.innerHeight / 2
                    -
                    event.clientY
                ) / 25;



            if (bigCard) {

                bigCard.style.marginLeft =
                    `${x}px`;

                bigCard.style.marginTop =
                    `${y}px`;

            }



            if (smallCard) {

                smallCard.style.marginLeft =
                    `${x * 1.5}px`;

                smallCard.style.marginTop =
                    `${y * 1.5}px`;

            }



            if (contentCard) {

                contentCard.style.marginLeft =
                    `${x * .8}px`;

                contentCard.style.marginTop =
                    `${y * .8}px`;

            }


        }
    );



    // REINICIAR POSICIÓN

    hero.addEventListener(
        "mouseleave",
        () => {


            [
                bigCard,
                smallCard,
                contentCard
            ]

            .forEach(
                (card) => {


                    if (!card) {
                        return;
                    }


                    card.style.marginLeft =
                        "";


                    card.style.marginTop =
                        "";


                }
            );


        }
    );


}