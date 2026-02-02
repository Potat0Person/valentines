const container = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '♥'; // Use the heart character or an image
  heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random duration between 2 and 5 seconds
  
  container.appendChild(heart);
  
  // Remove heart element after animation finishes to prevent DOM clutter
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// Generate a new heart every 300 milliseconds
setInterval(createHeart, 300); 
