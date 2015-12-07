// dependencies
var fs = require('fs');
var postcss = require('postcss');
var atImport = require('postcss-import');
var cssnano = require('cssnano');
var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var each = require('postcss-each');
var mixins = require('postcss-mixins');
var conditionals = require('postcss-conditionals');
var postFor = require('postcss-for');
var cssNext = require('postcss-cssnext');
var inuityLayout = require('postcss-inuity-layout');
var colorRgbaFallback = require('postcss-color-rgba-fallback');
var comments = require('postcss-discard-comments');

var mkdirp = require('mkdirp');

var mainCssFile = 'public/css/main.css';
// css to be processed
var css = fs.readFileSync(mainCssFile, 'utf8');

// process css
// import must be first to be able to import the variables
postcss([atImport(), comments(), mixins, cssNext, each, postFor, conditionals, nested(), inuityLayout, colorRgbaFallback(), autoprefixer, cssnano()])
    .process(css, {
        // `from` option is required so relative import can work from input dirname
        from: mainCssFile,
        to: 'target/css/main.css',
        map: { inline: false }
    })
    .then(function(result) {
        return new Promise(function (resolve, reject) {
            mkdirp('target/css', function(err) {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                console.log('All seems good');
                fs.writeFileSync('target/css/main.css', result.css);
                if (result.map) {
                    fs.writeFileSync('target/css/main.css.map', result.map);
                }
                resolve(result);
            });
        })
    })
    .catch(function(err) {
        console.error(err);
    });
