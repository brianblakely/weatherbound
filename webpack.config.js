const webpack = require(`webpack`);
const path = require(`path`);

const UglifyJSPlugin = require(`uglifyjs-webpack-plugin`);

module.exports = {
  entry: `./src/index.js`,

  output: {
    filename: `[name].bundle.js`,
    path: path.resolve(__dirname, `dist`)
  },

  module: {
    rules: [
      {
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        loader: `babel-loader`,

        options: {
          presets: [
            [`@babel/env`, {
              targets: {
                browsers: `last 2 versions`
              }
            }]
          ],
          plugins: [`@babel/plugin-transform-runtime`]
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: `style-loader`
        }, {
          loader: `css-loader`
        }, {
          loader: `sass-loader`
        }]
      }
    ]
  },

  plugins: [new UglifyJSPlugin()],

  devServer: {
    contentBase: `./dist`
  },
  devtool: `eval-source-map`
};
