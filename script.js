const ACTIVECLASS = 'active';
const IMAGES = document.querySelectorAll('.flex-card-container');

IMAGES[0].classList.add(ACTIVECLASS);

function removeActiveClass() {
    const elm = document.querySelector(`.${ACTIVECLASS}`);
    if (elm) {
        elm.classList.remove(ACTIVECLASS);
        elm.style.width = "";  // Setzt die Breite zurück
        elm.style.height = ""; // Setzt die Höhe zurück
    }
}

function addClass($event) {
    $event.stopPropagation();
    removeActiveClass();
    
    const target = $event.currentTarget;
    target.classList.add(ACTIVECLASS);

    // Neue Größe setzen
    target.style.width = "85%";
    target.style.height = "60vh";
}

function resetSize($event) {
    const target = $event.currentTarget;
    target.classList.remove(ACTIVECLASS);  // Entfernt die active-Klasse beim Verlassen des Bildes
    target.style.width = "20%";  // Setzt die ursprüngliche Breite zurück
    target.style.height = "auto"; // Setzt die Höhe zurück
}

IMAGES.forEach(image => {
    image.addEventListener('click', addClass);
    image.addEventListener('mouseleave', resetSize); // Größe wird zurückgesetzt, wenn Maus das Bild verlässt
});
