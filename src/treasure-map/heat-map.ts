import type { Point } from './models';
import { getTemperature } from './math';

type Options = { treasure: Point, options: any, render: any, createClick: any, offset: Point };

export default function renderHeatMap({ treasure, options, render, createClick, offset }: Options) {
    for (let y = 0; y < options.size; y++) {
        for (let x = 0; x < options.size; x++) {
            const point = options.toScreen({ x, y }, offset);
            const treasurePoint = options.toScreen(treasure, offset);
            render(createClick({ point, temperature: getTemperature(treasurePoint, point) }).getElement());
        }
    }
};