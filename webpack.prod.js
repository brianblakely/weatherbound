const webpack = require(`webpack`);
const path = require(`path`);

const UglifyJSPlugin = require(`uglifyjs-webpack-plugin`);
const ExtractTextPlugin = require(`extract-text-webpack-plugin`);

module.exports = {
  entry: `./src/index.js`,

  output: {
    filename: `[name].bundle.js`,
    path: path.resolve(__dirname, `dist`)
  },

  module: {
    rules: [
      {
        test: {},
        exclude: /node_modules/,
        loader: `babel-loader`,

        options: {
          presets: [`env`]
        }
      },
      {
        test: {},

        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: `css-loader`,
              options: {
                sourceMap: true
              }
            },
            {
              loader: `sass-loader`,
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: `style-loader`
        })
      }
    ]
  },

  plugins: [new UglifyJSPlugin(), new ExtractTextPlugin(`style.css`)]
};
