class Rectangle {
    constructor(width, height, unit) {
        this.widths = width;
        this.heights = height;
        this.units = unit;
    }
}

class ColoredRectangle extends Rectangle {
    constructor(width, height, unit, color) {
        super(width, height, unit);
        this.colors = color;
    }
}
const myRect = new Rectangle(5, 3, 'cm');
const myColoredRect = new ColoredRectangle(4, 3, "mm", "red");
console.log(myRect);
console.log(myColoredRect);
