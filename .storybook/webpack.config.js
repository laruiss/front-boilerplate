const path = require('path')

module.exports = {
  plugins: [
    // your custom plugins
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '..', 'src'),
    },
  },
  module: {
    rules: [
      // add your custom rules.
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {},
        },
      },
    ],
  },
};
