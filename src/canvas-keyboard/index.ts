import { createCanvas } from "/src/shared/canvas";
import shapes from "/src/shared/shapes";
import type { KeyName } from "/src/shared/types";
import { keyName } from "/src/shared/keyboard";

export default function main() {
  const canvas = createCanvas();

  const ball = {
    x: 200,
    y: 200,
    xSpeed: 5,
    ySpeed: 0,
    init() {
      document.body.onkeydown = ({ keyCode }) => {
        this.setDirection(keyName(keyCode));
      };

      setInterval(() => {
        canvas.clean();
        this.draw();
        this.move();
      }, 30);
    },
    checkCollision() {
      if (this.x < 0) {
        this.x = 400;
      } else if (this.x > 400) {
        this.x = 0;
      }
      if (this.y < 0) {
        this.y = 400;
      } else if (this.y > 400) {
        this.y = 0;
      }
    },
    move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;

      this.checkCollision();
    },
    draw() {
      shapes(canvas.getContext()).circle(this.x, this.y, 5, {
        fillStyle: "Black",
      });
    },
    setDirection(key: KeyName) {
      switch (key) {
        case "left":
          this.xSpeed = -5;
          this.ySpeed = 0;
          break;
        case "up":
          this.xSpeed = 0;
          this.ySpeed = -5;
          break;
        case "right":
          this.xSpeed = 5;
          this.ySpeed = 0;
          break;
        case "down":
          this.xSpeed = 0;
          this.ySpeed = 5;
          break;
      }
    },
  };

  ball.init();
}
