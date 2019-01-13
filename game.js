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
  constructor(diameter, bottom, left) {
    this.diameter = diameter;
    this.left = left;
    this.bottom = bottom;
  }
  moveUp() {
    this.bottom = this.bottom + 2;
  }
  moveLeft() {
    this.left = this.left - 2;
  }
}

// class Game{
//   constructor(Paddle,Ball){
//     this.Paddle=Paddle;
//     this.Ball = Ball;
//   }
//   MoveBall(){
//     set
//   }
// }