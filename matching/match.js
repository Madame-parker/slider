const card = document.getElementById('card');
const likeBtn = document.getElementById('like-btn');
const dislikeBtn = document.getElementById('dislike-btn');
const levelUp = document.getElementById('level-up');
const particlesContainer = document.getElementById('particles');

const profiles = [
  { name: 'Pikachu', type: 'Elektro', location: 'Alabastia', img: 'https://placekitten.com/150/150' },
  { name: 'Glumanda', type: 'Feuer', location: 'Lavandia', img: 'https://placekitten.com/150/151' },
  { name: 'Schiggy', type: 'Wasser', location: 'Azuria City', img: 'https://placekitten.com/150/152' }
];

let currentIndex = 0;
let isDragging = false;
let startX = 0;

function showProfile() {
  const profile = profiles[currentIndex];
  document.getElementById('profile-name').textContent = profile.name;
  document.getElementById('profile-info').innerHTML = `Typ: ${profile.type}<br>Lieblingsort: ${profile.location}`;
  document.getElementById('profile-pic').src = profile.img;
  card.style.transform = 'none';
  card.style.opacity = '1';
}

function swipe(direction) {
    if (direction === 'right') {
      card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      card.style.transform = 'translateX(500px) rotate(20deg)';
      card.style.opacity = '0';
      setTimeout(() => {
        triggerMatch();
        nextProfile();
      }, 500);
    } else {
      card.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
      card.style.transform = 'translateX(-500px) rotate(-20deg)';
      card.style.opacity = '0';
      triggerSadFace();
      setTimeout(nextProfile, 500);
    }
  }
  
  function triggerSadFace() {
    const sadFace = document.getElementById('sad-face');
    sadFace.classList.remove('hidden');
    sadFace.classList.add('show-sad');
  
    setTimeout(() => {
      sadFace.classList.remove('show-sad');
      sadFace.classList.add('hidden');
    }, 1500);
  }

function triggerMatch() {
  if (Math.random() > 0.5) { // Zufällige Match-Logik
    levelUp.classList.remove('hidden');
    levelUp.classList.add('show-level-up');
    createParticles();

    setTimeout(() => {
      levelUp.classList.remove('show-level-up');
      levelUp.classList.add('hidden');
      clearParticles();
    }, 2500);
  }
}

function createParticles() {
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const x = Math.random();
    const y = Math.random();
    particle.style.setProperty('--randX', x);
    particle.style.setProperty('--randY', y);
    particlesContainer.appendChild(particle);
  }
}

function clearParticles() {
  particlesContainer.innerHTML = '';
}

likeBtn.addEventListener('click', () => swipe('right'));
dislikeBtn.addEventListener('click', () => swipe('left'));

card.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
  card.style.transition = 'none';
});

document.addEventListener('mouseup', (e) => {
  if (!isDragging) return;
  isDragging = false;
  const diffX = e.clientX - startX;
  if (diffX > 150) {
    swipe('right');
  } else if (diffX < -150) {
    swipe('left');
  } else {
    card.style.transition = 'transform 0.3s ease';
    card.style.transform = 'translateX(0) rotate(0)';
  }
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const diffX = e.clientX - startX;
  card.style.transform = `translateX(${diffX}px) rotate(${diffX / 20}deg)`;
});

function nextProfile() {
    currentIndex = (currentIndex + 1) % profiles.length;
    
    // Karte resetten
    card.style.transition = 'none';
    card.style.transform = 'translateX(0) rotate(0)';
    card.style.opacity = '1';
    
    showProfile();
  }