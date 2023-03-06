import helloWorld from './hello-world';
import treasureMap from './treasure-map';
import canvas from './canvas-basics/index';

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

if (location.pathname === '/treasure-map') {
    clean();
    treasureMap();
}
if (location.pathname === '/hello-world') {
    clean();
    helloWorld();
}
if (location.pathname === '/canvas') {
    clean();
    canvas();
}