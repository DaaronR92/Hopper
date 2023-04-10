// Get player element
const player = document.getElementById("player");

// Set initial position and velocity
let posX = window.innerWidth / 2 - player.offsetWidth / 2;
let velocityX = 0;

// Set speed of player movement
const speed = 5;

// Update player position
function updatePlayerPosition() {
  // Update position based on velocity
  posX += velocityX;
  
  // Keep player within screen bounds
  if (posX < 0) {
    posX = 0;
  } else if (posX > window.innerWidth - player.offsetWidth) {
    posX = window.innerWidth - player.offsetWidth;
  }

  // Update player element's style
  player.style.left = posX + "px";
  
  // Request next frame update
  requestAnimationFrame(updatePlayerPosition);
}

// Add event listeners for keydown and keyup events
window.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft") {
    // Left arrow key pressed, set velocity to the left
    velocityX = -speed;
  } else if (event.key === "ArrowRight") {
    // Right arrow key pressed, set velocity to the right
    velocityX = speed;
  }
});

window.addEventListener("keyup", function(event) {
  if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
    // Left or right arrow key released, set velocity to 0
    velocityX = 0;
  }
});

// Start updating player position
updatePlayerPosition();
