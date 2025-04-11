const features = document.querySelectorAll('.feature');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

features.forEach(feature => {
  feature.classList.add('invisible');
  observer.observe(feature);
});

const style = document.createElement('style');
style.textContent = `
  .invisible {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.6s ease-out;
  }
  .visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

window.addEventListener('DOMContentLoaded', () => {
  // Tippeffekt im Chat
  const chatBox = document.getElementById('chat-box');
  const messages = [
    '<strong>🧙‍♂️ GandalfFan420:</strong> Du sollst nicht allein swipen!',
    '<strong>👩‍🚀SpaceBae88:</strong> Ich liebe dich bis zum Pluto und zurück 💫',
    '<strong>🕹️ZeldaZocker:</strong> Herzcontainer gefunden – bist du bereit fürs nächste Level?'
  ];
  let i = 0;

  function typeMessage(msg, cb) {
    let p = document.createElement('p');
    chatBox.appendChild(p);
    let index = 0;
    function type() {
      if (index < msg.length) {
        p.innerHTML = msg.slice(0, index++) + '|';
        setTimeout(type, 30);
      } else {
        p.innerHTML = msg;
        cb();
      }
    }
    type();
  }

  function runMessages() {
    if (i < messages.length) {
      typeMessage(messages[i++], runMessages);
    }
  }

  runMessages();
});
document.addEventListener('DOMContentLoaded', () => {
    const quizForm = document.getElementById('quiz-form');
    const submitQuiz = document.getElementById('submit-quiz');
    const quizResult = document.getElementById('quiz-result');
  
    submitQuiz.addEventListener('click', () => {
      const answers = {
        Gryffindor: 0,
        Ravenclaw: 0,
        Hufflepuff: 0,
        Slytherin: 0,
        Hobbit: 0,
        Elf: 0,
        Zwerg: 0,
        Mensch: 0
      };
  
      const questions = quizForm.querySelectorAll('input[type="radio"]:checked');
      if (questions.length < 4) {
        quizResult.textContent = 'Bitte beantworte alle Fragen!';
        return;
      }
  
      questions.forEach(question => {
        answers[question.value]++;
      });
  
      // Hogwarts-Haus bestimmen
      let hogwartsHouse = Object.keys(answers)
        .slice(0, 4) // Gryffindor bis Slytherin
        .reduce((a, b) => (answers[a] > answers[b] ? a : b));
  
      // Herr-der-Ringe-Spezies bestimmen
      let lotrSpecies = Object.keys(answers)
        .slice(4) // Hobbit bis Mensch
        .reduce((a, b) => (answers[a] > answers[b] ? a : b));
  
      quizResult.innerHTML = `
        🧙‍♂️ Du bist im Haus <strong>${hogwartsHouse}</strong>!<br>
        🪐 Und du gehörst zur Spezies <strong>${lotrSpecies}</strong>!
      `;
    });
  });