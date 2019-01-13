class Paddle {
  constructor(height, width, left, bottom, speed) {
    this.height = height;
    this.width = width;
    this.left = left;
    this.bottom = bottom;
    this.speed = speed;
  }

  moveLeft() {
    this.left = this.left - this.speed;
  }

  moveRight() {
    this.left = this.left + this.speed;
  }
}

class Ball {
  constructor(diameter, bottom, left, horizontalBoundary, verticalBoundary) {
    this.diameter = diameter;
    this.left = left;
    this.bottom = bottom;
    this.horizontalBoundary = horizontalBoundary;
    this.verticalBoundary = verticalBoundary;
    this.x = 2;
    this.y = 2;
  }
  moveVertical() {
    this.bottom = this.bottom + this.y;
  }
  moveHorizontal() {
    this.left = this.left - this.x;
  }
  changeHorizontalDirection() {
    this.x = -1 * this.x;
  }
  changeVerticalDirection() {
    this.y = -1 * this.y;
  }
  isHorizontalCollide() {
    return (
      this.left === 0 || this.left >= this.horizontalBoundary - this.diameter
    );
  }
  isTopCollide() {
    return this.bottom >= this.verticalBoundary - this.diameter;
  }
  isBottomCollide() {
    return this.bottom === 0;
  }
}

class Game {
  constructor(paddle, ball) {
    this.paddle = paddle;
    this.ball = ball;
  }
  isCollide() {
    let isLeft = this.ball.left <= this.paddle.left + this.paddle.width;
    let isRight = this.paddle.left <= this.ball.left + this.ball.diameter;
    let isTouching = this.ball.bottom == this.paddle.bottom + this.paddle.height + 1;
    return (
      isLeft && isRight && isTouching
    );
  }
}
