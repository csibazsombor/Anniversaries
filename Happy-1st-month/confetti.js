document.addEventListener('DOMContentLoaded', function () {
    const confettiContainer = document.getElementById('confetti');
    
    const createConfetti = () => {
        const confettiCount = 200;
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            const size = Math.random() * 10 + 10;  // Random size between 10px and 20px
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;
            confetti.style.backgroundColor = getRandomColor();
            confetti.style.position = 'absolute';
            confetti.style.top = `${Math.random() * 100}%`;
            confetti.style.left = `${Math.random() * 100}%`;
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;
            confettiContainer.appendChild(confetti);
        }
    };

    const getRandomColor = () => {
        const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33F6', '#FFDF33'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    createConfetti();
});
