import { createCanvas } from "/src/shared/canvas";
import shapes from "/src/shared/shapes";

export default function main() {
  const blockSize = 10;
  const width = 400;
  const height = 400;
  const widthInBlocks = width / blockSize; // 40
  const heightInBlocks = height / blockSize; // 40

  const canvas = createCanvas();
  let score = 0;

  function drawBorder() {
    const ctx = canvas.getContext();
    ctx.fillStyle = "Gray";
    ctx.fillRect(0, 0, width, blockSize);
    ctx.fillRect(0, height - blockSize, width, blockSize);
    ctx.fillRect(0, 0, blockSize, height);
    ctx.fillRect(width - blockSize, 0, blockSize, height);
  }

  function drawScore() {
    const ctx = canvas.getContext();
    ctx.font = "20px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(`Score: ${score}`, blockSize, blockSize);
  }

  function drawGameOver() {
    const ctx = canvas.getContext();
    ctx.font = "60px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Game Over", width / 2, height / 2);
  }

  class Block {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    draw(color = "Black") {
      const ctx = canvas.getContext();
      ctx.fillStyle = color;
      ctx.fillRect(
        this.x * blockSize,
        this.y * blockSize,
        blockSize,
        blockSize
      );
    }

    drawCircle(color = "Black") {
      const ctx = canvas.getContext();
      const x = this.x * blockSize + blockSize / 2;
      const y = this.y * blockSize + blockSize / 2;

      shapes(ctx).circle(x, y, blockSize / 2, true);
    }

    equals(other: Block) {
      return this.x === other.x && this.y === other.y;
    }

    static create(x: number, y: number) {
      return new Block(x, y);
    }
  }

  Block.create(1, 1).draw();
  Block.create(2, 1).drawCircle();
  drawBorder();
  drawScore();
  drawGameOver();

  /**
   * Set up the canvas
   * Set score to zero
   * Create snake
   * Create apple
   *
   * Every 100ms:
   * - Clear the canvas
   * - Draw current score on the screen
   * - Move the snake
   * If snake collides with wall or itself:
   * - End the game
   * Else if snake collides with apple:
   * - Increase score
   * - Create new apple
   * - Grow snake
   * For each segment of the snake:
   * - Draw the segment
   *
   * Draw the apple
   * Draw the border
   *
   * When the user presses a key:
   * - If the key is an arrow key:
   *  - Change the snake's direction
   */
}
