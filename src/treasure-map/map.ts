import type { Element, Event } from './models';
import type { CreateElement } from './dom';

type CreateOptionsMap = {
    size: number;
    onClick: (event: Event) => void;
};

export default function createMapFactory(createDiv: CreateElement) {
    function createMapElement({ size, onClick }: CreateOptionsMap) {
        return createDiv(div => {
            div.style.borderRight = '1px solid black';
            div.style.borderBottom = '1px solid black';
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;
            div.onclick = onClick
        });
    }

    class Map implements Element {
        size: number;
        onClick: (event: Event) => void;
        constructor({ size, onClick }: CreateOptionsMap) {
            this.size = size;
            this.onClick = onClick;
        }
        getElement = () => createMapElement({
            size: this.size, onClick: this.onClick
        });
        static create = (options: CreateOptionsMap): Map => {
            return new Map(options);
        }
    }

    return Map.create;
}