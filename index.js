const inquirer = require("inquirer");
const fs = require("fs");


const questions = [
    {
        type: "input",
        name: "fontColour",
        message: "Please enter the colour (or hex code!) you would like your font to be."
    }
]