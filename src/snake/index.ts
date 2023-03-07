import { keyName } from "../shared/keyboard";
import { createCanvas } from "/src/shared/canvas";
import shapes from "/src/shared/shapes";
import type { KeyName } from "/src/shared/types";

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

export default function main() {
  const blockSize = 10;
  const width = 400;
  const height = 400;
  const widthInBlocks = width / blockSize; // 40
  const heightInBlocks = height / blockSize; // 40

  const canvas = createCanvas();
  let score = 0;
  let speed = 100;
  let paused = false;
  let intervalId: ReturnType<typeof setInterval>;

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

  function drawGameOver(intervalId?: ReturnType<typeof setInterval>) {
    clearInterval(intervalId);
    const ctx = canvas.getContext();
    ctx.font = "60px Courier";
    ctx.fillStyle = "Black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Game Over", width / 2, height / 2);
  }

  class Snake {
    segments: Block[] = [
      Block.create(7, 5),
      Block.create(6, 5),
      Block.create(5, 5),
    ];
    direction: KeyName = "right";
    nextDirection: KeyName = "right";
    gameOver: () => void;
    constructor(gameOver: () => void) {
      this.gameOver = gameOver;
    }
    draw() {
      this.segments[0].drawSquare("darkblue");
      this.segments
        .slice(1, this.segments.length)
        .forEach((segment) => segment.drawSquare("blue"));
    }
    checkCollision(head: Block) {
      const leftCollision = head.x === 0;
      const topCollision = head.y === 0;
      const rightCollision = head.x === widthInBlocks - 1;
      const bottomCollision = head.y === heightInBlocks - 1;

      const wallCollision =
        leftCollision || topCollision || rightCollision || bottomCollision;

      let selfCollision = false;
      this.segments.forEach((segment) => {
        if (head.equals(segment)) {
          selfCollision = true;
        }
      });

      return wallCollision || selfCollision;
    }
    setNextDirection(newDirection: KeyName) {
      if (this.direction === "up" && newDirection === "down") {
        return;
      } else if (this.direction === "right" && newDirection === "left") {
        return;
      } else if (this.direction === "down" && newDirection === "up") {
        return;
      } else if (this.direction === "left" && newDirection === "right") {
        return;
      }

      this.nextDirection = newDirection;
    }
    move(apple: Apple) {
      const head = this.segments[0];
      this.direction = this.nextDirection;

      let newHead: Block;
      if (this.direction === "right") {
        newHead = Block.create(head.x + 1, head.y);
      } else if (this.direction === "down") {
        newHead = Block.create(head.x, head.y + 1);
      } else if (this.direction === "left") {
        newHead = Block.create(head.x - 1, head.y);
      } else if (this.direction === "up") {
        newHead = Block.create(head.x, head.y - 1);
      }

      if (this.checkCollision(newHead)) {
        this.gameOver();
        return;
      }

      this.segments.unshift(newHead);

      if (newHead.equals(apple.position)) {
        score++;
        apple.move();
        speed -= 5;
        clearInterval(intervalId);
        intervalId = setInterval(paint, speed);
      } else {
        this.segments.pop();
      }
    }
    static create(gameOver: () => void) {
      return new Snake(gameOver);
    }
  }

  class Block {
    x: number;
    y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    drawSquare(color = "Black") {
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

      shapes(ctx).circle(x, y, blockSize / 2, { fillStyle: color });
    }

    equals(other: Block) {
      return this.x === other.x && this.y === other.y;
    }

    static create(x: number, y: number) {
      return new Block(x, y);
    }
  }

  class Apple {
    position: Block;
    constructor() {
      this.move();
    }
    draw() {
      this.position.drawCircle("LimeGreen");
    }
    move() {
      const randomX = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
      const randomY = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
      this.position = Block.create(randomX, randomY);
    }
    static create() {
      return new Apple();
    }
  }

  const apple = Apple.create();
  const snake = Snake.create(() => {
    drawGameOver(intervalId);
  });

  const paint = () => {
    canvas.clean();
    drawScore();
    snake.move(apple);
    snake.draw();
    apple.draw();
    drawBorder();
  };
  intervalId = setInterval(paint, speed);

  document.body.onkeydown = (event) => {
    const newDirection = keyName(event.keyCode);
    if (newDirection === "pause") {
      if (paused) {
        intervalId = setInterval(paint, speed);
        paused = false;
      } else {
        clearInterval(intervalId);
        paused = true;
      }
    } else if (newDirection !== "other") {
      snake.setNextDirection(newDirection);
    }
  };
}
