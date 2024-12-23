document.addEventListener('DOMContentLoaded', function () {
    const confettiContainer = document.getElementById('confetti');

    const createConfetti = () => {
        const confettiCount = 200; // Number of confetti pieces
        const emojis = ['🎉', '💖', '💘', '💝', '💕']; // Love-related emojis

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            
            // Randomize size, position, and animation properties
            confetti.style.fontSize = `${Math.random() * 1.5 + 1.5}em`; // Random size between 1.5em and 3em
            confetti.style.left = `${Math.random() * 100}%`; // Random horizontal position
            confetti.style.animationDuration = `${Math.random() * 3 + 2}s, ${Math.random() * 2 + 2}s`; // Fall and sway durations
            confetti.style.animationDelay = `${Math.random() * 3}s, 0s`; // Random fall delay, sway starts immediately
            
            confettiContainer.appendChild(confetti);

            // Remove confetti after animation ends to prevent memory leaks
            confetti.addEventListener('animationend', () => {
                confetti.remove();
            });
        }
    };

    createConfetti();
});