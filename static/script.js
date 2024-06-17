window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_czldkd4', 'template_ln7ucnw', this)
        .then(() => {
            console.log('SUCCESS!');
        }, 
        (error) => {
            console.log('FAILED...', error);
        });
    });
}

