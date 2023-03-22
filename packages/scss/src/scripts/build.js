const fs = require("fs");
const path = require("path");
const sass = require("sass");

const getComponents = () => {
  let allComponents = [];

  const types = ["atoms", "molecules"];

  types.forEach((type) => {
    const allFiles = fs.readdirSync(`src/${type}`).map((file) => ({
      input: path.resolve("src", type, file),
      output: path.resolve("lib", file.slice(0, -4) + "css"),
    }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

const compile = (filePath, fileName) => {
  const result = sass.compile(path.resolve(filePath), { sync: true });
  fs.writeFileSync(path.resolve(fileName), result.css.toString());
};

compile("src/global.scss", "lib/global.css");

getComponents().forEach((component) =>
  compile(component.input, component.output)
);
