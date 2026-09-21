/* =========================================
   STEP 10 - JAVASCRIPT
   ========================================= */


/* =========================================
   CONTACT FORM
   ========================================= */

const contactForm =
    document.querySelector(".contact-form form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                contactForm.querySelector(
                    'input[name="name"]'
                ).value.trim();


            const email =
                contactForm.querySelector(
                    'input[name="email"]'
                ).value.trim();


            const subject =
                contactForm.querySelector(
                    'input[name="subject"]'
                ).value.trim();


            const message =
                contactForm.querySelector(
                    'textarea[name="message"]'
                ).value.trim();


            /* Check fields */

            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                alert(
                    "Please fill in all fields."
                );

                return;
            }


            /* Email content */

            const mailBody =
                "Name: " + name +
                "\n\n" +

                "Email: " + email +
                "\n\n" +

                "Message:\n" + message;


            /* Open email application */

            window.location.href =
                "mailto:manjushavangipuram@gmail.com" +

                "?subject=" +
                encodeURIComponent(subject) +

                "&body=" +
                encodeURIComponent(mailBody);

        }
    );

}


/* =========================================
   SMOOTH NAVIGATION
   ========================================= */

const navLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");


            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                const targetSection =
                    document.querySelector(
                        targetId
                    );


                if (targetSection) {

                    event.preventDefault();


                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }

        }
    );

});


/* =========================================
   CONSOLE MESSAGE
   ========================================= */

console.log(
    "Welcome to Vangipuram Sahithya Manjusha's Portfolio!"
);