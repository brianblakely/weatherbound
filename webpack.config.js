const webpack = require(`webpack`);
const path = require(`path`);

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
              },
              forceAllTransforms: process.env === `production`
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
      },
      {
        test: /\.(glsl|vs|fs)$/,
        loader: `shader-loader`
      }
    ]
  },

  devServer: {
    contentBase: `./dist`
  },
  devtool: process.env === `development` ? `eval-source-map` : `source-map`
};
