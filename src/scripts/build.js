const fs = require('fs');
const path = require('path');
const sass = require('sass');

const result = sass.compile(path.resolve('src/global.scss'), { sync: true });

fs.writeFileSync(path.resolve('src/lib/global.css'), result.css.toString())