import helloWorld from './hello-world';
import treasureMap from './treasure-map';
import canvasBasics from './canvas-basics';
import canvasMovement from './canvas-movement';

function clean() {
    document.body.innerHTML = '';
}

function createLink({ textContent, onClick }: { textContent: string, onClick?: () => void }) {
    const link = document.createElement('a');
    link.textContent = textContent;
    link.style.display = 'block';
    link.href = `/${textContent.toLowerCase().replace(' ', '-')}`;
    return link;
}

document.body.appendChild(createLink({ textContent: 'hello world' }));
document.body.appendChild(createLink({ textContent: 'treasure map' }));
document.body.appendChild(createLink({ textContent: 'canvas basics' }));
document.body.appendChild(createLink({ textContent: 'canvas movement' }));

if (location.pathname === '/treasure-map') {
    clean();
    treasureMap();
}
if (location.pathname === '/hello-world') {
    clean();
    helloWorld();
}
if (location.pathname === '/canvas-basics') {
    clean();
    canvasBasics();
}
if (location.pathname === '/canvas-movement') {
    clean();
    canvasMovement();
}