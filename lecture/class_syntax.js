class Shape {
    constructor(color) {
        this.color = color;
        let arr = new Array(1000000);
        arr.forEach(ele => console.log(ele))
    }

    sayHello() {
        console.log(`Hello, I am a ${this.color} shape`)
    }
}

class Rectangle extends Shape {
    constructor(color, width, length) {
        super(color);
        this.width = width;
        this.length = length;
    }

    area() {
        return this.width * this.length;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
}

const redRectangle = new Rectangle('red', 10, 15);
const pinkCircle = new Circle('pink', 5);