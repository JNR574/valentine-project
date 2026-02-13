const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const startScreen = document.getElementById('start-screen');
const videoScreen = document.getElementById('video-screen');
const video = document.getElementById('valentineVideo');
const finalText = document.getElementById('final-text');

// INFINITE JUMP LOGIC
noButton.addEventListener('mouseover', () => {
    // We only want the button to jump within the "button-box" area
    const box = document.querySelector('.button-box');
    
    // Calculate boundaries so it stays visible
    const maxX = box.clientWidth - noButton.offsetWidth;
    const maxY = box.clientHeight - noButton.offsetHeight;

    // Generate random position within that box
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Apply the movement
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});

// YES BUTTON LOGIC
yesButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    videoScreen.style.display = 'flex';
    
    finalText.innerHTML = "I knew you'd say yes!!! Can't wait to kiss your neck and make it purple all over!🫦";
    
    video.muted = false; 
    video.play();
});