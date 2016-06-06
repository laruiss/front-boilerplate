var postcssImport = require('postcss-import');
var cssnano = require('cssnano');
// var autoprefixer = require('autoprefixer'); // already used by cssnext
var nested = require('postcss-nested');
var each = require('postcss-each');
var mixins = require('postcss-mixins');
var conditionals = require('postcss-conditionals');
var postFor = require('postcss-for');
var cssNext = require('postcss-cssnext');
var inuityLayout = require('postcss-inuity-layout');
var colorRgbaFallback = require('postcss-color-rgba-fallback');
var comments = require('postcss-discard-comments');
var path = require('path');

var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
var modernizrConfig = {
  filename: './target/js/lib/modernizr.js'
};

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var production = process.argv.indexOf('--production') > -1;

module.exports = {
  entry: {
    app: [
      './public/js/app/app.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'target'),
    filename: 'js/app/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
    }]
  },
  plugins: [
    new ModernizrWebpackPlugin(modernizrConfig),
    new HtmlWebpackPlugin({
      title: 'Docteur',
      template: 'public/index.html'
    }),
    new ExtractTextPlugin('main.css')
  ],
  postcss: function (webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      comments(),
      mixins,
      cssNext,
      each,
      postFor,
      conditionals,
      nested(),
      inuityLayout,
      colorRgbaFallback(),
      // autoprefixer,  // already used by cssnext
      cssnano()
    ];
  },
  cssnext: {
    sourcemap: !production,
    compress: production
  }
};
