// script.js
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent page refresh
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        console.log("Form Submitted:", { name, email, message });
        
        // You can add code here to send data to a server, etc.
        alert("Thank you for contacting us!");
    });
});
