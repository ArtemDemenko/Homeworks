const shape = document.getElementById('shape');
const color = document.getElementById('color');
const figure = document.getElementById('figure');



shape.addEventListener('input', onShape);
color.addEventListener('input', onColorInput);
document.addEventListener('keydown', onArrowMove);

function onShape() {
    switch (shape.value) {
        case 'quad': drawQuad(); break;
        case 'rectangle': drawRect(); break;
        case 'circle': drawCricle(); break;
    }
}

function onColorInput() {
    figure.style.backgroundColor = color.value;
}

function onArrowMove(e) {
    switch (e.key) {
        case 'ArrowRight': figure.style.left = figure.offsetLeft + 10 + 'px'; break;
        case 'ArrowLeft': figure.style.left = figure.offsetLeft - 10 + 'px'; break;
        case 'ArrowDown': figure.style.top = figure.offsetTop + 10 + 'px'; break;
        case 'ArrowUp': figure.style.top = figure.offsetTop - 10 + 'px'; break;
    }
}

function drawQuad() {
    figure.style.borderRadius = 0 + 'px';
    figure.style.width = 100 + 'px';
    figure.style.height = 100 + 'px';

}

function drawRect() {
    figure.style.borderRadius = 0 + 'px';
    figure.style.width = 300 + 'px';
    figure.style.height = 100 + 'px';
}

function drawCricle() {
    figure.style.borderRadius = 50 + 'px';
    figure.style.width = 100 + 'px';
    figure.style.height = 100 + 'px';
}