import type { Point, Element } from './models';
import type { Temperature } from './math';
import type { CreateElement } from './dom';

type Color = 'gold' | 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'black';

function getColor(temperature: Temperature): Color {
    switch (temperature) {
        case 'Treasure!':
            return 'gold';
        case 'Boiling hot!':
            return 'red';
        case 'Really hot':
            return 'orange';
        case 'Hot':
            return 'yellow';
        case 'Warm':
            return 'green';
        case 'Cold':
            return 'blue';
        case 'Really cold':
            return 'indigo';
        case 'Freezing!':
            return 'black';
    }
}

type Options = { point: Point, temperature: Temperature }

class Click implements Element {
    static createElement: CreateElement;
    static size: number;
    temperature: Temperature;
    point: Point;
    constructor({ point, temperature }: Options) {
        this.temperature = temperature;
        this.point = point;
    }
    getElement = () => Click.createElement(div => {
        div.style.position = 'absolute';
        div.style.left = `${this.point.x}px`;
        div.style.top = `${this.point.y}px`;
        div.style.width = `${Click.size}px`;
        div.style.height = `${Click.size}px`;
        div.style.backgroundColor = getColor(this.temperature);
    });
}

export default function creator({ create, size }: { create: CreateElement, size: number }): (options: Options) => Click {
    Click.createElement = create;
    Click.size = size;
    return (options) => new Click(options);
};
