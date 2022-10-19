const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js', //bunddle everythig into main.js file
    path: path.resolve(__dirname, 'dist'),
  },
};
