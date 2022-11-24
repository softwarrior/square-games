'use strict';

function Square (rootId) {
    Square.order++;
    this.rootId = rootId;
    this.className = 'square';
    this.colorIndex = 0;
    this.colors = [
        'yellow',
        'blue',
        'green'
    ]
    this.render()
}

Square.prototype.render = function () {
    if (this.square) {
        this.square.remove();
    }
    const square = document.createElement('div');
    square.classList.add(this.className);
    square.classList.add('order' + Square.order);
    this.square = square;
    this.square.addEventListener(
        'click',
        this.clickHandler.bind(this)
    )
    this.changeColor(this.colors[this.colorIndex]);

    const root = document.getElementById(this.rootId);
    root.appendChild(square);
}
Square.prototype.changeColor = function (color) {
    this.square.classList.remove('yellow');
    this.square.classList.remove('blue');
    this.square.classList.remove('green');
    this.square.classList.add(color);

}
Square.prototype.clickHandler = function () {
    if (this.colorIndex === 2) {
        this.colorIndex = 0;
    } else {
        this.colorIndex++;
    }
    this.render();
}
Square.order = 0;

const square1 = new Square('square-root');
const square2 = new Square('square-root');
const square3 = new Square('square-root');

console.log(square1);
console.log(square2);
console.log(square3);
