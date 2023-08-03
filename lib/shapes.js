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
        return `<rect x="10" y="10" width="30" height="30" fill="${this.colour}"/>`;
    }
}


class Circle extends Shape {
    render () {
        return `<circle cx="25" cy="75" r="20" fill="${this.colour}"/>`;
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.colour}"/>`;
    }
}

//Exporting classes to other files
module.exports = {Square, Circle, Triangle};