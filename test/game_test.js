describe("Paddle", function() {
  let paddle = new Paddle(20, 100, 450, 5, 10);

  describe("moveLeft", function() {
    it("should return a value decreased by 10 for any given left", function() {
      paddle.moveLeft();
      chai.assert.equal(paddle.left, 440);
    });
  });

    describe("moveRight", function() {
      it("should return a value increased by 10 for any given number", function() {
        paddle.moveRight();
        chai.assert(paddle.left, 460);
      });
    });
});
