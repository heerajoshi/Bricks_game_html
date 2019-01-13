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
    this.x = 1;
    this.y = 1;
  }
  moveVertical() {
    this.bottom = this.bottom + this.y * 2;
  }
  moveHorizontal() {
    this.left = this.left - this.x * 2;
  }
  changeHorizontalDirection() {
    this.x = -1 * this.x;
  }
  changeVerticalDirection() {
    this.y = -1 * this.y;
  }
  isHorizontalCollide() {
    return (
      this.left == 0 ||
      this.left >= this.horizontalBoundary - this.diameter 
    );
  }
  isTopCollide() {
    return this.bottom >=  this.verticalBoundary - this.diameter ;
  }
  isBottomCollide() {
    return this.bottom === 0;
  }
}

class Game{
  constructor(Paddle,Ball){
    this.Paddle=Paddle;
    this.Ball = Ball;
  }
  collide(){
    set
  }
}
