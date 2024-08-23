window.onload = function() {    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        const name = event.target.name.value
        const email = event.target.email.value
        const subject = event.target.subject.value
        const message = event.target.message.value

        const errorElement = document.querySelector('#error')

        let errorMessages = []

        if (name === '' || name == null) {
            errorMessages.push('Name is required')
        }

        if (email.includes('@') === false || email.includes('.') === false) {
            errorMessages.push('Email is missing "." or "@"')
        }

        if (subject === '' || subject == null) {
            errorMessages.push('Subject is required')
        }

        if (message === '' || message == null) {
            errorMessages.push('Message is required')
        }

        function displayMessage() {
            event.preventDefault()
            errorElement.style.display = 'inline'
            errorElement.innerText = errorMessages.join(', ')
        }

        function clearText() {
            event.target.name.value = ''
            event.target.email.value = ''
            event.target.subject.value = ''
            event.target.message.value = ''
        }

        if (errorMessages.length > 0) {
            displayMessage()
        }
        else {
            event.preventDefault();
            emailjs.sendForm('service_czldkd4', 'template_ln7ucnw', this)
                    .then(() => {
                        errorMessages.push('Message sent successfully!');
                        displayMessage();
                        console.log('SUCCESS!');
                        clearText();
                    }, (error) => {
                        errorMessages.push('Message failed to send');
                        displayMessage();
                        console.log('FAILED...', error);
                    });
        }

    });
}