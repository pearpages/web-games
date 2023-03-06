import helloWorld from './hello-world';
import treasureMap from './treasure-map';

function clean() {
    document.body.innerHTML = '';
}

function createLink({ textContent, onClick }: { textContent: string, onClick?: () => void }) {
    const link = document.createElement('a');
    link.textContent = textContent;
    link.style.display = 'block';
    link.onclick = () => {
        clean();
        onClick();
    }
    link.href = `/${textContent.toLowerCase().replace(' ', '-')}`;
    return link;
}

document.body.appendChild(createLink({ textContent: 'hello world', onClick: helloWorld }));
document.body.appendChild(createLink({ textContent: 'treasure map', onClick: treasureMap }));

if (location.pathname === '/treasure-map') {
    clean();
    treasureMap();
}
if (location.pathname === '/hello-world') {
    clean();
    helloWorld();
}