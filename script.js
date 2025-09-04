document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').innerText = "Thank you! Your message has been sent.";
    this.reset();
});
