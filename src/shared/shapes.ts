function shape(ctx: any) {
    function circle(x: number, y: number, radius: number, fillCircle = false) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, false);
        if (fillCircle) {
            ctx.fill();
        } else {
            ctx.stroke();
        }
    }

    function bee(x: number, y: number) {
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = 'gold';

        circle(x, y, 8, true);
        circle(x, y, 8);
        circle(x - 5, y - 11, 5);
        circle(x + 5, y - 11, 5);
        circle(x - 2, y - 1, 2);
        circle(x + 2, y - 1, 2);
    }

    return { circle, bee };
}

export default shape;