const inquirer = require("inquirer");
const { generateLogo } = require("./lib/generateLogo");
const { Circle, Triangle, Square } = require("./lib/shapes");
const Svg = require("./lib/svg");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "list",
      message: "Choose a shape: ",
      name: "shape",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "list",
      message: "Choose a shape color: ",
      name: "shapeColor",
      choices: ["Red", "Blue", "Green"],
    },
    {
      type: "list",
      message: "Choose a text color: ",
      name: "textColor",
      choices: ["Red", "Blue", "Green"],
    },
    {
      type: "input",
      message: "Enter shape text",
      name: "text",
      validate: (text) => {
        if (text.length > 3) {
          console.error("Text length too long");
          return false;
        } else {
          return true;
        }
      },
    },
  ])
  .then((data) => {
    let shape = "";
    switch (data.shape) {
      case "Circle":
        shape = new Circle();
        break;
      case "Triangle":
        shape = new Triangle();
        break;
      case "Square":
        shape = new Square();
        break;
    }
    shape.setColor(data.shapeColor);
    let mySvg = new Svg();
    mySvg.setText(data.text, data.textColor);
    mySvg.setShape(shape);

    fs.writeFileSync("newSvg.svg", mySvg.render(), (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
