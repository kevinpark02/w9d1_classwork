function Shape(color) {
    this.color = color;
}

Shape.prototype.sayHello = function() {
    console.log(`Hello, I am a ${this.color} shape.`)
}

function Rectangle(color, width, length) {
    // this.color = color;
    Shape.call(this, color);
    this.width = width;
    this.length = length;
}

function Circle(color, radius) {
    // this.color = color;
    Shape.call(this, color);
    this.radius = radius;
}

// Naive Solution 1
// don't do this, it can potentailly slow down your code
// Rectangle.prototype.__proto__ = Shape.prototype;

// Naive solution 2
// don't do this, it makes it so Any methods defined on Child.prototpye will now also be on Parent.prototype
// which means that circles will have access to all of  rectangle's method, and the other way around

// Rectangle.prototype = Shape.prototype;
// Circle.prototype = Shape.prototype;

// Naive solution 3
// Rectangle.prototype = new Shape();
// Circle.prototype = new Shape();

// Correct Solution 1

function inherits(childClass, parentClass) {
    function Surrogate () {}
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
    childClass.prototype.constructor = childClass;
}

// inherits(Rectangle, Shape);
// inherits(Circle, Shape);

// Correect solution 2
// Rectangle.prototype = Object.create(Shape.prototype);
// Rectangle.prototype.constructor = Rectangle;

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Rectangle;

// Correct Solution 3


Rectangle.prototype.area = function() {
    return this.width * this.length;
}

const pinkCircle = new Circle('pink', 5);
const redRectangle = new Rectangle('red', 10, 15);


// const blueShape = new Shape('blue');

