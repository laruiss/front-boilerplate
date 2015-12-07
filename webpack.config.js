var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
var modernizrConfig = {
  filename: './target/js/lib/modernizr.js',
}

module.exports = {
    entry: './public/js/app/app.js',
    output: {
        filename: './target/js/app/app.js',
    },
    plugins: [
        new ModernizrWebpackPlugin(modernizrConfig)
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};
