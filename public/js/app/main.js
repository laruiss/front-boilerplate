// RequireJS config
requirejs.config({
    baseUrl: 'js/',
    paths: {
        "jquery": [
            '//cdnjs.cloudflare.com/ajax/libs/jquery/1.11.0/jquery.min',
            '../bower_components/jquery-legacy/jquery.min'
         ],
         "lodash": [
            '//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min',
            '../bower_components/lodash/dist/lodash.min'
        ],
        'text': [
            '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text.min',
            '../bower_components/requirejs-text/text'
        ],
        'imagesloaded':   'vendor/imagesloaded.pkgd.min',
        'qtip':           '//cdnjs.cloudflare.com/ajax/libs/qtip2/2.1.1/jquery.qtip.min',
        'logLevels':      'util/logLevels',
        'logger':         'util/logger',
        'logConf':        'app/log-conf',
        'cookieManager':  'util/cookieManager',
        'app':            'app/app'
    }
});
requirejs(["app"]);