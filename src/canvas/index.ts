function createCanvas(appendTo: HTMLElement = document.body) {
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = 400;
    canvas.height = 400;
    canvas.style.border = '1px solid black';
    appendTo.appendChild(canvas);

    return {
        getContext() { return canvas.getContext('2d') },
        drawSquare() {
            const ctx = this.getContext();
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, 100, 100);
        },
        drawMultipleSquares(offsetX = 0, offsetY = 0) {
            const ctx = this.getContext();
            for (let i = 0; i < 8; i++) {
                ctx.fillStyle = 'blue';
                ctx.fillRect((i * 10) + offsetX, (i * 10) + offsetY, 10, 10);
            }
        },
        drawCross() {
            const ctx = this.getContext();
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'turquoise';
            ctx.beginPath();
            ctx.moveTo(100, 100);
            ctx.lineTo(200, 200);
            ctx.moveTo(200, 100);
            ctx.lineTo(100, 200);
            ctx.stroke();
        },
        drawHouse() {
            const ctx = this.getContext();
            ctx.fillStyle = 'skyblue';
            ctx.beginPath();
            ctx.moveTo(200, 300);
            ctx.lineTo(200, 260);
            ctx.lineTo(230, 230);
            ctx.lineTo(260, 260);
            ctx.lineTo(260, 300);
            ctx.lineTo(200, 300);
            ctx.fill();
        },
        drawCircle() {
            const ctx = this.getContext();
            ctx.strokeStyle = 'orange';
            ctx.beginPath();
            ctx.arc(100, 300, 50, 0, 2 * Math.PI);
            ctx.stroke();
        },
        drawBullseye() {
            const circle = (x: number, y: number, radius: number, fillCircle = false): void => {
                const ctx = this.getContext();
                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2, false);
                if (fillCircle) {
                    ctx.fill();
                } else {
                    ctx.stroke();
                }
            }

            const ctx = this.getContext();
            ctx.lineWidth = 4;

            ctx.strokeStyle = 'red';
            circle(300, 60, 10);

            ctx.strokeStyle = 'Orange';
            circle(300, 60, 20);

            ctx.strokeStyle = 'Yellow';
            circle(300, 60, 30);

            ctx.strokeStyle = 'Green';
            circle(300, 60, 40);

            ctx.strokeStyle = 'Blue';
            circle(300, 60, 50);
        },
        clean() {
            this.getContext().clearRect(0, 0, 400, 400);
        }
    }
}

function init() {
    const fieldset = document.createElement('fieldset');
    fieldset.style.display = 'inline-block';
    const legend = document.createElement('legend');
    legend.textContent = 'Canvas';
    fieldset.appendChild(legend);
    const canvas = createCanvas(fieldset);
    document.body.appendChild(fieldset);
    return canvas;
}

function main() {
    const canvas = init();
    canvas.drawSquare();
    canvas.drawMultipleSquares(0, 100);
    canvas.drawCross();
    canvas.drawHouse();
    canvas.drawCircle();
    canvas.drawBullseye();
}

export default main;