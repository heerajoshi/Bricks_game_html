class Paddle {
  constructor(height, width, bottom, left) {
    this.height = height;
    this.width = width;
    this.bottom = bottom;
    this.left = left;
  }
}

const drawPaddle = function(paddleDiv, paddle) {
  console.log("fhjgfdugdgu");
  paddleDiv.style.height = paddle.height;
  paddleDiv.style.width = paddle.width;
  paddleDiv.style.bottom = paddle.bottom;
  paddleDiv.style.left = paddle.left;
};

const createPaddle = function(document, paddle) {
  let paddleDiv = document.createElement("div");
  paddleDiv.className = "paddle_div";
  paddleDiv.id = "paddle";
  drawPaddle(paddleDiv, paddle);
  document.getElementById("screen").appendChild(paddleDiv);
};

const initaialize = function() {
  let paddle = new Paddle(20, 100, 5, 430);
  createPaddle(document, paddle);
};

window.onload = initaialize;
