function createCanvas() {
    const fieldset = document.createElement('fieldset');
    fieldset.style.display = 'inline-block';
    const legend = document.createElement('legend');
    legend.textContent = 'Canvas';
    fieldset.appendChild(legend);
    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    canvas.width = 400;
    canvas.height = 400;
    canvas.style.border = '1px solid black';
    fieldset.appendChild(canvas);
    document.body.appendChild(fieldset);
    return {
        canvas,
        getContext() {
            return canvas.getContext('2d');
        },
        clean() {
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 400, 400);
        }
    }
}

export { createCanvas };
