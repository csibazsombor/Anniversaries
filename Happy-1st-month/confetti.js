document.addEventListener('DOMContentLoaded', function () {
    const confettiContainer = document.getElementById('confetti');
    
    const createConfetti = () => {
        const confettiCount = 200;  // Number of love emojis
        const emojis = ['🎉', '💖', '💘', '💝', '💕'];  // Array of love-related emojis

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];  // Random love emoji
            confetti.style.fontSize = `${Math.random() * 1.5 + 1.5}em`;  // Random size between 1.5em and 3em
            confetti.style.left = `${Math.random() * 100}%`;  // Random horizontal position
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;  // Random fall duration between 2s and 5s
            confetti.style.animationDelay = `${Math.random() * 3}s`;  // Random delay before falling
            confettiContainer.appendChild(confetti);
        }
    };

    createConfetti();
});
