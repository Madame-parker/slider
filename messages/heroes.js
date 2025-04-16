document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('chat-slider');
    const sliderToggle = document.getElementById('slider-toggle');
    const notification = document.getElementById('notification');
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const messages = document.getElementById('messages');
    const chatList = document.getElementById('chat-list');
    const chatTitle = document.getElementById('chat-title');

    // Sidebar ein-/ausklappen
    sliderToggle.addEventListener('click', () => {
        slider.classList.toggle('closed');
        sliderToggle.innerText = slider.classList.contains('closed') ? '➡️' : '🗨️';
    });

    // Nachricht anzeigen
    const sendMessage = (text, sender = 'user') => {
        const trimmedText = text.trim();
        if (!trimmedText) return;
    
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', sender);
        newMessage.innerText = `${sender === 'user' ? 'Du' : 'Batman'}: ${trimmedText}`;
        messages.appendChild(newMessage);
        messages.scrollTop = messages.scrollHeight;
    
        // Nur wenn wirklich eine andere Person schreibt
        if (sender !== 'user') {
            showNotification(`Neue Nachricht von Batman!`);
        }
    
        if (sender === 'user') {
            messageInput.value = '';
        }
    };
    
    // Neue Funktion zum Anzeigen der Notification
    const showNotification = (text) => {
        notification.innerText = text;
        notification.style.display = 'block';
    
        setTimeout(() => {
            notification.style.display = 'none';
        }, 3000);
    };
    

    // Button "Senden"
    sendButton.addEventListener('click', () => {
        sendMessage(messageInput.value, 'user');
    });

    // Enter-Taste im Inputfeld
    messageInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // kein Zeilenumbruch
            sendMessage(messageInput.value, 'user');
        }
    });

    // Chat-Auswahl links
    chatList.addEventListener('click', (e) => {
        if (e.target.classList.contains('chat-item')) {
            const chatName = e.target.textContent;
            chatTitle.textContent = chatName;
            messages.innerHTML = `<div class="message hero">${chatName}: Dieser Chat beginnt hier!</div>`;
        }
    });
});
