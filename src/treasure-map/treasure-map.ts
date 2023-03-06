import createMapFactory from './map';
import createHeatMap from './heat-map';
import { createDiv, render } from './dom';
import createClickFactory from './click';
import type { Point, Event } from './models';
import { getRandomPoint, getTemperature } from './math';

const options = {
    zoom: 6,
    size: 50,
    toScreen({ x, y }: Point, { x: offsetX, y: offsetY } = { x: 0, y: 0 }): Point {
        if (x === 0) {
            return { x: x + offsetX, y: (y * this.zoom) + offsetY };
        }
        if (y === 0) {
            return { x: (x * this.zoom) + offsetX, y: y + offsetY };
        }
        return { x: (x * this.zoom) + offsetX, y: (y * this.zoom) + offsetY };
    },
    normalize({ x, y }: Point): Point {
        return { x: Math.floor(x / this.zoom), y: Math.floor(y / this.zoom) }
    },
    toPoint(event: Event): Point {
        return {
            x: event.offsetX,
            y: event.offsetY
        };
    }
}

export default function game() {
    const createClick = createClickFactory({ create: createDiv, size: options.zoom });
    const createMap = createMapFactory(createDiv);

    const treasure = getRandomPoint({ right: options.size, bottom: options.size });

    let won = false;

    const score = {
        id: 'score',
        totalClicks: 0,
        getScoreText() {
            return `Total clicks: ${this.totalClicks}`
        },
        init() {
            render(createDiv(div => {
                div.id = this.id;
                div.innerText = this.getScoreText();
            }))
        },
        reRender() {
            document.getElementById(this.id).innerText = this.getScoreText();
        }
    };

    const map = createMap({
        size: options.size * options.zoom, onClick: (event: Event) => {
            if (won) {
                return;
            }
            const clickedPoint = options.normalize(options.toPoint(event));
            score.totalClicks++;
            if (treasure.x === clickedPoint.x && treasure.y === clickedPoint.y) {
                alert('You found the treasure!');
                won = true;
                render(createDiv(div => {
                    div.innerText = 'You won!';
                    div.style.fontSize = '30px';
                    div.style.color = 'red';
                }));
            }
            const temperature = getTemperature(treasure, clickedPoint, options.zoom);
            render(createClick({ point: options.toScreen(clickedPoint), temperature }).getElement());
            score.reRender();
        }
    });
    render(map.getElement());
    score.init();
    // createHeatMap({ options, treasure, render, createClick, offset: { x: 301, y: 0 } });
}
