document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.getElementById('edit-button');
    const saveButton = document.getElementById('save-button');
    const dropdowns = document.querySelectorAll('.dropdown');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const modalCloseButton = document.getElementById('modal-close');

    editButton.addEventListener('click', () => {
        // Dropdowns und Speichern-Button aktivieren
        dropdowns.forEach(dropdown => {
            dropdown.disabled = false;
            dropdown.style.cursor = 'pointer';
        });
        saveButton.disabled = false;
        editButton.disabled = true;
    });

    saveButton.addEventListener('click', () => {
        // Änderungen speichern
        const gender = document.getElementById('gender').value;
        const personality = document.getElementById('personality').value;
        const livingSituation = document.getElementById('living-situation').value;

        // Zeige Modal an
        modalMessage.innerText = `Geschlecht: ${gender}\nPersönlichkeit: ${personality}\nWohnsituation: ${livingSituation}`;
        modal.classList.add('visible');

        // Dropdowns wieder deaktivieren
        dropdowns.forEach(dropdown => {
            dropdown.disabled = true;
            dropdown.style.cursor = 'not-allowed';
        });
        saveButton.disabled = true;
        editButton.disabled = false;
    });

    modalCloseButton.addEventListener('click', () => {
        modal.classList.remove('visible'); // Versteckt das Modal
    });
});