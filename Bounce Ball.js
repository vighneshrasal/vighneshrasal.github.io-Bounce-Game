// Get the canvas and context
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Ball object
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 30,
    speed: 10,
    dx: 4,
    dy: 4
};

let score = 0;
document.getElementById('reset').addEventListener('click', function scoreReset(){
    score = 0;
    document.getElementById('score').innerHTML = score;
});

// Function to draw the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

// Function to update the ball position
function updateBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Bounce off the walls
    if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.dx = -ball.dx;

        score++;
        document.getElementById('score').innerHTML = score;
    }

    if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.dy = -ball.dy;
        score++;

        document.getElementById('score').innerHTML = score;
    }
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Function to handle mouse click
canvas.addEventListener('click', (event) => {
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;

    // Set the ball position to the clicked location
    ball.x = mouseX;
    ball.y = mouseY;
});

// Main game loop
function gameLoop() {
    clearCanvas();
    updateBall();
    drawBall();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();

