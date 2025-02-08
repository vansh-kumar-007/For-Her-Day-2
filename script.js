document.querySelector('.envelope').addEventListener('animationend', () => {
    // Play music when the letter is revealed
    let music = document.getElementById('love-song');
    
    // Ensure the audio is ready to play
    if (music.readyState >= 3) {
        music.play();
    } else {
        music.addEventListener('canplaythrough', () => {
            music.play();
        });
    }

    // Trigger butterfly animations after the letter reveals
    setTimeout(() => {
        let butterflies = document.querySelectorAll('.butterfly');
        butterflies.forEach((butterfly, index) => {
            setTimeout(() => {
                butterfly.style.animation = 'flyButterflies 5s ease-in-out infinite';
                butterfly.style.opacity = '1'; // Make butterfly visible
            }, index * 1000);
        });
    }, 2000);  // Delay butterflies slightly after the letter
});
