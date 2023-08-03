//Importing classes from shapes.js
const { Square, Circle, Triangle } = require('./shapes');

//Testing to see if the render functions work as they should
describe("Render triangle", () => {
    it("should render a blue triangle", () => {
      const shape = new Triangle();
      shape.pickColour("blue");
      expect(shape.render()).toEqual(`<polygon points="150, 50 250, 150 250, 150" fill="blue"/>`);
    });
  });

describe("Render square", () => {
    it("should render a red square", () => {
      const shape = new Square();
      shape.pickColour("red");
      expect(shape.render()).toEqual(`<rect x="50" y="50" width="200" height="200" fill="red"/>`);
    });
  });

  describe("Render circle", () => {
    it("should render a yellow circle", () => {
      const shape = new Circle();
      shape.pickColour("yellow");
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="75" fill="yellow"/>`);
    });
  });