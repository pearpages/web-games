import { createCanvas } from '/src/shared/canvas';
import shapes from '/src/shared/shapes';

const createMovingRect = (ctx: any) => (x: number) => ctx.fillRect(x, 0, 20, 20);
const createGrowingRect = (ctx: any) => (size: number) => ctx.fillRect(0, 0, size, size);

function createMovement(canvas: any) {
    let position = 0;

    setInterval(() => {
        canvas.clean();
        createMovingRect(canvas.getContext())(position);

        position++;
        if (position > 400) position = 0;
    }, 5)
}

function createGrowing(canvas: any) {
    let zoom = 1;

    setInterval(() => {
        canvas.clean();
        createGrowingRect(canvas.getContext())(zoom);

        zoom++;
        if (zoom > 400) zoom = 0;
    }, 5)
}

function updateCoordinate(coordinate: number): number {
    const offset = Math.random() * 4 - 2;
    const newCoordinate = coordinate + offset;

    if (newCoordinate < 0) return 0;
    if (newCoordinate > 400) return 400;
    return newCoordinate;
}

function movingBee(canvas: any) {
    const shape = shapes(canvas.getContext())

    const bee = {
        x: 200,
        y: 200,
        animate() {
            setInterval(() => {
                canvas.clean();
                shape.bee(this.x, this.y);

                this.x = updateCoordinate(this.x);
                this.y = updateCoordinate(this.y);
            }, 30);
        }
    }

    bee.animate();
}

function bouncingBall(canvas: any) {
    const shape = shapes(canvas.getContext())

    const ball = {
        x: 200,
        y: 200,
        xSpeed: -2,
        ySpeed: 3,
        draw() {
            canvas.clean();
            shape.circle(this.x, this.y, 3, true);
        },
        move() {
            this.x += this.xSpeed;
            this.y += this.ySpeed;
        },
        checkCollision() {
            if (this.x < 0 || this.x > 400) this.xSpeed = -this.xSpeed;
            if (this.y < 0 || this.y > 400) this.ySpeed = -this.ySpeed;
        },
        animate() {
            setInterval(() => {
                this.draw();
                this.checkCollision();
                this.move();
            }, 30);
        }
    }

    ball.animate();
}

export default function main() {
    const canvas1 = createCanvas();
    const canvas2 = createCanvas();
    const canvas3 = createCanvas();
    const canvas4 = createCanvas();

    createMovement(canvas1);
    createGrowing(canvas2);
    movingBee(canvas3);
    bouncingBall(canvas4);
}
