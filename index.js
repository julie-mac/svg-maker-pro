const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const { Shape, Square, Circle, Triangle } = require("./lib/shapes");



const questions = [
    {
        type: "input",
        name: "fontColour",
        message: "Please enter the colour (or hex code!) you would like your font to be."
    },
    {
        type: "input",
        name: "shapeColour",
        message: "Please enter the colour (or hex code!) you would like your shape to be."
    },
    {
        type: "list",
        name: "shape",
        message: "What shape would you like your logo to be?",
        choices: ["Square", "Circle", "Triangle"]
    },
    {
        type: "input",
        name: "text",
        message: "Please enter up to three characters to put inside your logo.",
        validate: (input)=> input.length <= 3
    }
]



function init() {
    inquirer.prompt(questions)
    .then((data) => {

        //destructuring elements from data
        const {fontColour, shapeColour, shape, text} = data;
        const newShape = new Shape();
        let svgCode = "";

        //defining colour based on user's input and creating new Shape
        newShape.pickColour(shapeColour);

        switch(shape) {
            case "Square":
                const newSquare = new Square();
                newSquare.pickColour(shapeColour);
                svgCode = newSquare.render();
                break;
            case "Triangle":
                const newTriangle = new Triangle();
                newTriangle.pickColour(shapeColour);
                svgCode = newTriangle.render();
                break;
            case "Circle":
                const newCircle = new Circle();
                newCircle.pickColour(shapeColour);
                svgCode = newCircle.render();
                break;        
        }

        const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">${svgCode}<text x="50%" y="50%" text-anchor="middle" fill="${fontColour}">${text}</text></svg>`;

        const outputPath = path.join(__dirname, "examples", "logo.svg");
        fs.writeFileSync(outputPath, logoSvg);

        console.log("Generated logo.svg");
    })
    .catch((error) => {
        console.error("Error:", error);
    });
}

init();