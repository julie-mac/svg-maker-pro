//Importing classes from shapes.js
const {Square, Circle, Triangle} = require('./shapes');

//Testing to see if the render functions work as they should
describe("Render triangle", () => {
    it("should render a blue triangle", () => {
      const shape = new Triangle();
      shape.pickColour("blue");
      expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
    });
  });

describe("Render square", () => {
    it("should render a red square", () => {
      const shape = new Square();
      shape.pickColour("red");
      expect(shape.render()).toEqual(`<rect x="10" y="10" width="30" height="30" fill="red"/>`);
    });
  });

  describe("Render circle", () => {
    it("should render a yellow circle", () => {
      const shape = new Circle();
      shape.pickColour("yellow");
      expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20" fill="yellow"/>`);
    });
  });