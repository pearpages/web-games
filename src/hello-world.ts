function createButtons(buttons: Array<{ innerText: string, onClick: () => void }>): HTMLButtonElement[] {
    return buttons.map(({ innerText, onClick }) =>
        createButton({ innerText, onClick })
    );
    function createButton({ innerText, onClick }: { onClick: () => void; innerText: string }): HTMLButtonElement {
        const button = document.createElement('button');
        button.innerText = innerText;
        button.onclick = onClick;
        return button;
    }
}

function createHelloWorld(id: string) {
    let left = 0;
    let top = 100;
    const element = document.createElement('div');
    element.innerText = 'Hello World';
    element.id = id;
    const style = {
        border: '1px solid red',
        display: 'inline-block',
        padding: '4px',
        position: 'absolute',
        top: `${top}px`
    }
    Object.entries(style).forEach(([key, value]: any) => {
        element.style[key] = value;
    });
    return {
        element,
        moveLeft: () => {
            left -= 10;
            element.style.left = `${left}px`;
        },
        moveRight: () => {
            left += 10;
            element.style.left = `${left}px`;
        },
        moveUp: () => {
            top -= 10;
            element.style.top = `${top}px`;
        },
        moveDown: () => {
            top += 10;
            element.style.top = `${top}px`;
        },
    };
}

function animateElement(element: HTMLElement): void {
    let left = 0;
    setInterval(() => {
        left += 10;
        element.style.left = `${left}px`;
    }, 200);
}

function main() {
    const hello = createHelloWorld('hello');
    const buttons = createButtons([
        { innerText: 'Left', onClick: hello.moveLeft },
        { innerText: 'Up', onClick: hello.moveUp },
        { innerText: 'Right', onClick: hello.moveRight },
        { innerText: 'Down', onClick: hello.moveDown },
    ])

    document.body.appendChild(hello.element);
    buttons.forEach(button => document.body.appendChild(button));
}

export default main;