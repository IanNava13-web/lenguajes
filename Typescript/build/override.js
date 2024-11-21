"use strict";
class Rectangle {
    // using protected for these members allows access from classes that extend from this class, such as Square
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    toString() {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}
class Square extends Rectangle {
    constructor(width) {
        super(width, width);
    }
    // this toString replaces the toString from Rectangle
    toString() {
        return `Square[width=${this.width}]`;
    }
}
