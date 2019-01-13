let paddle = new Paddle(20, 100, 350, 1, 15);
let ball = new Ball(50, 30, 374, 800, 570);
let game = new Game(paddle, ball);
const applyPixel = count => count + "px";

const createPaddleDiv = function() {
  let screen = document.getElementById("screen");
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle_1";
  paddleDiv.className = "paddle";
  screen.appendChild(paddleDiv);
  screen.focus();
  screen.onkeydown = move.bind(null, paddle);
};

const drawPaddle = function(paddle) {
  let paddleDiv = document.getElementById("paddle_1");
  paddleDiv.style.height = applyPixel(paddle.height);
  paddleDiv.style.width = applyPixel(paddle.width);
  paddleDiv.style.left = applyPixel(paddle.left);
  paddleDiv.style.bottom = applyPixel(paddle.bottom);
};

const createBallDiv = function() {
  let screen = document.getElementById("screen");
  let ballDiv = document.createElement("div");
  ballDiv.id = "ball";
  ballDiv.className = "ballDiv";
  screen.appendChild(ballDiv);
};

const drawBall = function(ball) {
  const ballDiv = document.getElementById("ball");
  ballDiv.style.height = applyPixel(ball.diameter);
  ballDiv.style.width = applyPixel(ball.diameter);
  ballDiv.style.borderRadius = applyPixel(ball.diameter / 2);
  ballDiv.style.bottom = applyPixel(ball.bottom);
  ballDiv.style.left = applyPixel(ball.left);
};

const move = function(paddle) {
  if (event.key == "ArrowRight" && paddle.left < 700) paddle.moveRight();
  if (event.key == "ArrowLeft"&& paddle.left > 0) paddle.moveLeft();
  drawPaddle(paddle);
};

const moveBall = function(ball, game) {
  if (ball.isTopCollide()) ball.changeVerticalDirection();
  if (ball.isHorizontalCollide()) ball.changeHorizontalDirection();
  if (game.isCollide()) ball.changeVerticalDirection();
  if (ball.isBottomCollide()) location.reload();
  ball.moveVertical();
  ball.moveHorizontal();
  drawBall(ball);
};

const animatedBall = function(ball, game) {
  setInterval(moveBall.bind(null, ball, game), 10);
};

window.onload = function() {
  createPaddleDiv();
  drawPaddle(paddle);
  createBallDiv();
  drawBall(ball);
  animatedBall(ball, game);
};
