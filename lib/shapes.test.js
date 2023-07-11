const { Circle, Triangle, Square } = require("./shapes");

test("Set shape colors", () => {
  let testShape1 = new Circle();
  testShape1.setColor("Blue");
  expect(testShape1.render()).toEqual(
    `<circle cx="150" cy = "100" r = "100" fill="Blue"/>`
  );
  let testShape2 = new Triangle();
  testShape2.setColor("Green");
  expect(testShape2.render()).toEqual(
    `<polygon points="150, 18 244, 182 56, 182" fill="Green"/>`
  );
  let testShape3 = new Square();
  testShape3.setColor("Red");
  expect(testShape3.render()).toEqual(
    `<rect width="100%" height="100%" fill="Red"/>`
  );
});
