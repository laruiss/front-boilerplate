const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const isProduction = mode === 'production'
const sourceMap = !isProduction
const isDevMode = !isProduction

const publicPath = '/'
const buildPath = path.join(__dirname, 'build')
const srcPath = path.join(__dirname, 'src')

const webpackConfig = {
  mode: isDevMode ? 'development' : 'production',

  devtool: sourceMap ? 'cheap-module-eval-source-map' : undefined,

  entry: './src/index.js',

  output: {
    path: buildPath,
    filename: isDevMode ? 'static/js/[name].js' : 'static/js/[name].[chunkhash:8].chunk.js',
    chunkFilename: isDevMode ? 'static/js/[name].js' : 'static/js/[name].[chunkhash:8].chunk.js',
    publicPath,
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: require('eslint/lib/formatters/stylish'),
              eslintPath: require.resolve('eslint'),
            },
            loader: require.resolve('eslint-loader'),
          },
        ],
        include: srcPath,
      },
      {
        test: /\.(js|jsx|mjs)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
        ],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {},
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(__dirname, 'public', 'index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      proxy: 'http://localhost:8080/',
    }, {
      reload: false,
    }),
  ],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
}

if (isDevMode) {
  webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin())
  webpackConfig.devServer = {
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api/v1': {
        target: 'http://localhost:3003',
        pathRewrite: { '^/api/v1': '' },
      },
    },
  }
}

module.exports = webpackConfig
