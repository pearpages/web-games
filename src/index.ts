import helloWorld from './hello-world';
import treasureMap from './treasure-map';
import canvasBasics from './canvas-basics';
import canvasMovement from './canvas-movement';
import canvasKeyboard from './canvas-keyboard';
import snake from './snake';

function clean() {
    document.body.innerHTML = '';
}

const routeNames = [
    'hello world',
    'treasure map',
    'canvas basics',
    'canvas movement',
    'canvas keyboard',
    'snake'
];

function createHref(textContent: string) {
    return `/${textContent.toLowerCase().replace(' ', '-')}`
}

function createLink(textContent: string) {
    const link = document.createElement('a');
    link.textContent = textContent;
    link.style.display = 'block';
    link.href = createHref(textContent);
    return link;
}

routeNames.forEach(name => document.body.appendChild(createLink(name)));

function renderPage(
    page: () => void,
) {
    clean();
    page();
}

switch (location.pathname) {
    case createHref(routeNames[0]):
        renderPage(helloWorld);
        break;
    case createHref(routeNames[1]):
        renderPage(treasureMap);
        break;
    case createHref(routeNames[2]):
        renderPage(canvasBasics);
        break;
    case createHref(routeNames[3]):
        renderPage(canvasMovement);
        break;
    case createHref(routeNames[4]):
        renderPage(canvasKeyboard);
        break;
    case createHref(routeNames[5]):
        renderPage(snake);
        break;
}
