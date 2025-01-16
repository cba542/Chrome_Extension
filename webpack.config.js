const path = require('path');

module.exports = {
  entry: {
    background: './src/background.js',
    content: './src/content.js', 
    popup: './src/popup.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true
};
