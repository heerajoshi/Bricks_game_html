const createPaddleDiv = function(document) {
  let div = document.createElement("div");
  div.id = "paddle_1";
  div.className = "paddle";
  return div;
};

const drawPaddle = function(document, paddle) {
  const paddleDiv = document.getElementById("paddle_1");
  paddleDiv.style.height = applyPixel(paddle.height);
  paddleDiv.style.width = applyPixel(paddle.width);
  paddleDiv.style.left = applyPixel(paddle.left);
  paddleDiv.style.bottom = applyPixel(paddle.bottom);
};

const createBallDiv = function() {
  // let screen = getElementById('screen');
  let div = document.createElement("div");
  div.id = "ball";
  div.className = "ballDiv";
  return div;
};

const drawBall = function(document, ball) {
  const ballDiv = document.getElementById("ball");
  ballDiv.style.height = applyPixel(ball.diameter);
  ballDiv.style.width = applyPixel(ball.diameter);
  ballDiv.style.borderRadius = applyPixel(ball.diameter / 2);
  ballDiv.style.bottom = applyPixel(ball.bottom);
  ballDiv.style.left = applyPixel(ball.left);
};

const applyPixel = count => count + "px";

const move = function(document, paddle) {
  console.log(event);
  if (event.key == "ArrowRight") paddle.moveRight();
  if (event.key == "ArrowLeft") paddle.moveLeft();
  drawPaddle(document, paddle);
};

const initialise = function() {
  const paddle = new Paddle(20, 100, 350, 1, 15);
  const paddleDiv = createPaddleDiv(document);
  const ball = new Ball(50, 20, 375);
  const ballDiv = createBallDiv(document);
  let screen = document.getElementById("screen");
  screen.appendChild(paddleDiv);
  screen.appendChild(ballDiv);
  drawPaddle(document, paddle);
  drawBall(document, ball);
  screen.onkeydown = move.bind(null, document, paddle);
};

window.onload = initialise;
