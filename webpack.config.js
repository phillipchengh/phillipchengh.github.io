const glob = require('glob');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env = { production: false }) => {
  const distPath = 'dist';
  const buildPath = `${__dirname}/${distPath}`;
  const entrypointsPath = './src/entrypoints';
  const hotUpdatePath = 'hot-update';
  const outputCssName = '[name].css';
  const outputJsName = '[name].js';
  const sourceMap = true;

  const plugins = [
    new MiniCssExtractPlugin({
      filename: outputCssName,
    }),
  ];

  if (!env.production) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return {
    devServer: {
      before: (app) => {
        app.get('/', (req, res) => {
          res.sendFile(`${__dirname}/index.html`);
        });
      },
      contentBase: buildPath,
      compress: true,
      host: 'localhost',
      port: 8080,
      allowedHosts: [
        'localhost',
      ],
      hot: !env.production,
      publicPath: `/${distPath}`,
    },
    // webpack does builtin optimizations accordingly
    mode: env.production ? 'production' : 'development',
    // make every js file in src/entrypoints an entrypoint
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
    // just keep their file names
    output: {
      path: buildPath,
      filename: outputJsName,
      // https://webpack.js.org/configuration/output/#outputhotupdatechunkfilename
      hotUpdateChunkFilename: `${hotUpdatePath}/[id].[hash].hot-update.js`,
      // https://webpack.js.org/configuration/output/#outputhotupdatemainfilename
      hotUpdateMainFilename: `${hotUpdatePath}/[hash].hot-update.json`,
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
          test: /\.less$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                sourceMap,
                // 2 => postcss-loader, less-loader|sass-loader applied before css-loader
                // https://webpack.js.org/loaders/css-loader/#importloaders
                importLoaders: 2,
              },
            },
            {
              // "postcss" loader applies autoprefixer and cssnano minification to CSS.
              loader: 'postcss-loader',
              options: {
                sourceMap,
                config: {
                  path: __dirname,
                },
              },
            },
            {
              loader: 'less-loader',
              options: {
                sourceMap,
                lessOptions: {
                  // paths: paths.cssIncludePaths,
                  sourceMap: sourceMap ? {} : null,
                },
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ],
    },
    optimization: {
      minimize: env.production,
      minimizer: [new TerserPlugin()],
    },
    resolve: {
      extensions: ['.js'],
    },
    plugins,
  };
};

// console.log(module.exports(), null, 2);
