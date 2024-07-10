const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const { writeFile } = require("fs/promises");

class CLI {
    async run() {
        try {
            const { text, textColor, shapeType, shapeColor } = await inquirer.prompt([
                {
                    name: "text",
                    type: "input",
                    message: "Please choose text for the logo (up to 3 characters):",
                    validate: (text) => text.length <= 3 || "The text must not contain more than 3 characters.",
                },
                {
                    name: "textColor",
                    type: "input",
                    message: "Enter a text color:",
                },
                {
                    name: "shapeType",
                    type: "list",
                    message: "Please select a shape for the logo from the following:",
                    choices: ["circle", "square", "triangle"],
                },
                {
                    name: "shapeColor",
                    type: "input",
                    message: "Enter a shape color:",
                },
            ]);

            let shape;
            switch (shapeType) {
                case "circle":
                    shape = new Circle();
                    break;
                case "square":
                    shape = new Square();
                    break;
                case "triangle":
                default:
                    shape = new Triangle();
                    break;
            }
            shape.setColor(shapeColor);

            const svg = new SVG();
            svg.setText(text, textColor);
            svg.setShape(shape);

            await writeFile("logo.svg", svg.render());
            console.log("Generated logo.svg");
        } catch (error) {
            console.error("Oops! Something went wrong:", error);
        }
    }
}

module.exports = CLI;
