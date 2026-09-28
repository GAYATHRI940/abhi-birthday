// ==========================================
// OPENING SURPRISE
// ==========================================

function openSurprise() {

    const hero =
        document.querySelector(".hero");

    const birthdaySection =
        document.getElementById("birthday");


    hero.classList.add("hide-hero");


    setTimeout(() => {

        birthdaySection.scrollIntoView({
            behavior: "smooth"
        });

    }, 500);

}



// ==========================================
// PERSONAL MESSAGE TYPING EFFECT
// ==========================================

const message = `
To my favorite person, the one who always makes my heart feel safe and happy. ❤️

Thank you for staying, for understanding me, and for loving me with all your heart.

I'm beyond grateful to have you in my life.

I love you, and I hope this year brings you more joy, more strength, and everything you've been praying for.
`;


let messageStarted = false;


function startTypingMessage() {

    if (messageStarted) {
        return;
    }


    messageStarted = true;


    const textElement =
        document.getElementById("messageText");


    const signature =
        document.getElementById(
            "messageSignature"
        );


    let index = 0;


    function typeLetter() {

        if (index < message.length) {

            textElement.textContent +=
                message.charAt(index);

            index++;


            setTimeout(
                typeLetter,
                35
            );

        }

        else {

            setTimeout(() => {

                signature.classList.add(
                    "show-signature"
                );

            }, 700);

        }

    }


    typeLetter();

}



// ==========================================
// START TYPING WHEN MESSAGE PAGE IS VISIBLE
// ==========================================

const messageSection =
    document.querySelector(
        ".message-section"
    );


const messageObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startTypingMessage();

                }

            });

        },

        {
            threshold: 0.4
        }

    );


messageObserver.observe(
    messageSection
);



// ==========================================
// FINAL SURPRISE
// ==========================================

function finalSurprise() {

    const finalMessage =
        document.getElementById(
            "finalMessage"
        );


    finalMessage.style.display =
        "block";


    finalMessage.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });


    createHearts();

}



// ==========================================
// FALLING HEARTS
// ==========================================

function createHearts() {

    const hearts = [

        "❤️",
        "💖",
        "💕",
        "💗",
        "💓",
        "✨"

    ];


    for (let i = 0; i < 50; i++) {


        const heart =
            document.createElement("div");


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random()
                    * hearts.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.top =
            "-30px";


        heart.style.fontSize =
            (15 +
            Math.random() * 25)
            + "px";


        heart.style.zIndex =
            "9999";


        heart.style.pointerEvents =
            "none";


        document.body.appendChild(
            heart
        );


        const duration =
            3 +
            Math.random() * 3;


        heart.animate(

            [

                {

                    transform:
                        "translateY(0) rotate(0deg)",

                    opacity: 1

                },

                {

                    transform:
                        "translateY(110vh) rotate(360deg)",

                    opacity: 0

                }

            ],

            {

                duration:
                    duration * 1000,

                easing:
                    "ease-in"

            }

        );


        setTimeout(() => {

            heart.remove();

        }, duration * 1000);

    }

}



// ==========================================
// SECRET MESSAGE
// ==========================================

function showSecret() {

    const secretMessage =
        document.getElementById(
            "secretMessage"
        );


    secretMessage.style.display =
        "block";


    createSecretHearts();


    secretMessage.scrollIntoView({

        behavior: "smooth",

        block: "center"

    });

}



// ==========================================
// SMALL SECRET HEART EFFECT
// ==========================================

function createSecretHearts() {

    const hearts = [
        "❤️",
        "💕",
        "💖"
    ];


    for (let i = 0; i < 20; i++) {

        const heart =
            document.createElement("div");


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random()
                    * hearts.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.bottom =
            "-30px";


        heart.style.fontSize =
            (15 +
            Math.random() * 20)
            + "px";


        heart.style.zIndex =
            "9999";


        heart.style.pointerEvents =
            "none";


        document.body.appendChild(
            heart
        );


        const duration =
            2 +
            Math.random() * 2;


        heart.animate(

            [

                {

                    transform:
                        "translateY(0)",

                    opacity: 1

                },

                {

                    transform:
                        "translateY(-110vh)",

                    opacity: 0

                }

            ],

            {

                duration:
                    duration * 1000,

                easing:
                    "ease-out"

            }

        );


        setTimeout(() => {

            heart.remove();

        }, duration * 1000);

    }

}