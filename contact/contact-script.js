document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.contact-form');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Formulardaten verarbeiten
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Einfacher Validierungscheck
        if (name && email && message) {
            successMessage.style.display = 'block';
            form.reset();
        } else {
            alert('Bitte fülle alle Felder aus, bevor du die Nachricht sendest!');
        }
    });
});
