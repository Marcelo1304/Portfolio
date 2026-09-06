/* =========================
   EFEITO DE TEXTO DIGITANDO
========================= */

const typing = document.getElementById("typing");

const words = [
    "Back-end Java",
    "Java Developer",
    "Desenvolvedor de software"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const word = words[wordIndex];


    if (deleting) {

        charIndex--;

        typing.textContent =
            word.slice(0, charIndex);

    } else {

        charIndex++;

        typing.textContent =
            word.slice(0, charIndex);
    }


    let delay = deleting ? 45 : 85;


    /* Terminou de escrever */

    if (
        !deleting &&
        charIndex === word.length
    ) {

        delay = 1700;

        deleting = true;
    }


    /* Terminou de apagar */

    else if (
        deleting &&
        charIndex === 0
    ) {

        deleting = false;

        wordIndex =
            (wordIndex + 1) %
            words.length;

        delay = 350;
    }


    setTimeout(typeEffect, delay);
}


typeEffect();


/* =========================
   ANIMAÇÃO AO ROLAR
========================= */

const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry, i) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.transitionDelay =
                            `${Math.min(i * 60, 300)}ms`;

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );
                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


document
    .querySelectorAll(".reveal")
    .forEach(
        element =>
            observer.observe(element)
    );


/* =========================
   MENU MOBILE
========================= */

const menu =
    document.querySelector(
        ".menu-toggle"
    );


const nav =
    document.querySelector(
        ".nav-links"
    );


menu.addEventListener(
    "click",
    () => {

        nav.classList.toggle(
            "open"
        );

    }
);


/* =========================
   FECHAR MENU AO CLICAR
========================= */

document
    .querySelectorAll(
        ".nav-links a"
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "open"
                    );

                }
            );

        }
    );


/* =========================
   DESABILITA LINKS #
========================= */

document
    .querySelectorAll(
        'a[href="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                }
            );

        }
    );