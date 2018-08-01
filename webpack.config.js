var path = require('path');
var HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  //react index.js
  entry: './src/index.js',

  //where to output bundled javascript file
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js'
  },

  //loaders
  module: {
    rules: [
      {
        test: /\.js$/, //anything that has .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      //for css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      //for imges and other assets
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },

  //plugins
  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    })
  ]
};
