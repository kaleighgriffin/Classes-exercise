// Phase 1
class Room {
    constructor(name, length, width) {
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity = 15;
    }
    getArea() {
        return this.length * this.width;
 
    }
    getPerimeter() {
        return this.length * 2 + this.width * 2;
    }
}

let room1 = new Room("Sun", 30, 20);
let room2 = new Room("Green", 15, 20);

console.log(room1, `area: ` + room1.getArea(), `perimeter: ` + room1.getPerimeter());
console.log(room2, `area: ` + room2.getArea(), `perimeter: ` + room2.getPerimeter());


// Phase 2
room2.available = false;

console.log(room1.name, `is available: ` + room1.available);
console.log(room2.name, `is available: ` + room2.available);


// Phase 3
room2.capacity = 18;

console.log(room1.name, `is at ` + room1.capacity + ` capacity.`);
console.log(room2.name, `is at ` + room2.capacity + ` capacity.`);