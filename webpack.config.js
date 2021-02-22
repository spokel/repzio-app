const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // the app entry point is index.js
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    // the output of the webpack build will be in the home directory
    path: path.resolve(__dirname),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    // React Router won't work without this
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // ignore transpiling JavaScript from node_modules as it should be that state
        exclude: /node_modules/,
        // use the babel-loader for transpiling JavaScript to a suitable format
        loader: 'babel-loader',
        options: {
          // attach the presets to the loader
          presets: ["@babel/preset-env", "@babel/preset-react"]
        }
      },
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          'css-loader',
        ]
      },
      {
        test: /\.(png|gif|jpg)$/i,
        use: [{
          loader: 'file-loader'
        }]
      }
    ]
  },
  // add a custom index.html as the template
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public', 'index.html') })
  ]
};