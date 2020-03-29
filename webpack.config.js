const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function config(env = { development: true }) {
  const distPath = 'dist';
  const buildPath = `${__dirname}/${distPath}`;
  const entrypointsPath = './src/entrypoints';
  const outputCssName = '[name].css';
  const outputJsName = '[name].js';

  return {
    // webpack does builtin optimizations accordingly
    mode: env.production ? 'production' : 'development',
    entry: glob.sync(`${entrypointsPath}/**/*.js`).reduce((entries, filePath) => {
      // the file name without the .js will be the entrypoint name
      const name = filePath.substring(
        filePath.lastIndexOf('/') + 1,
        filePath.lastIndexOf('.'),
      );
      return {
        ...entries,
        [name]: filePath,
      };
    }, {}),
    output: {
      // chunkFilename: outputJsName,
      path: buildPath,
      filename: outputJsName,
    },
    // use source maps
    devtool: 'source-map',
    module: {
      rules: [
        // lint js files
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                'env',
              ],
            },
          },
        },
        {
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            'less-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: outputCssName,
      }),
    ],
  };
};

console.log(module.exports(), null, 2);
