document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (name === "" || email === "" || message === "") {
                event.preventDefault();
                alert("Please fill in all fields");
            } else {
                alert("Your message has been sent");
            }
        });
    }

    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");
    if (menuButton && menu) {
        menuButton.addEventListener("click", function() {
            menu.classList.toggle("active");
        });
    }
});
