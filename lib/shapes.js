//Defining Shape class, attributing empty colour string which will later be added to by user's input
class Shape {
    constructor() {
        this.colour = '';
    }
    pickColour(colour) {
        this.colour = colour;
    }
}

//Extending from Shape class to make Square, Circle and Triangle classes
class Square extends Shape {
    render () {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.colour}"/>`;
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="100" r="75" fill="${this.colour}"/>`;
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="150, 50 250, 150 250, 150" fill="${this.colour}"/>`;
    }
}

//Exporting classes to other files
module.exports = {Shape, Square, Circle, Triangle};