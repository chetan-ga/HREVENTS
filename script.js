// script.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Add an event listener for the form submission
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Display a confirmation message
        formMessage.innerHTML = `<p>Thank you, ${name}! Your message has been sent successfully.</p>`;
        formMessage.style.color = "green";

        // Clear the form
        contactForm.reset();
    });
});
