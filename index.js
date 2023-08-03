const inquirer = require("inquirer");
const fs = require("fs");
const {Square, Circle, Triangle} = require("./shapes")
const createLogo = require('./lib/')

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
        name: "name",
        message: "Please enter up to three characters to put inside your logo."
    }
]

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile('logo.svg', (data.name, data.shape, data.shapeColour, data.fontColour) => {
            
        })
    })
}