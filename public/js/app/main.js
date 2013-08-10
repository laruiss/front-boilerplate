// RequireJS config
requirejs.config({
    baseUrl: 'js/',
    paths: {
    	"jquery":           '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min',
        'underscore':       '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.0/underscore-min',
        'text':             '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text.min',
	'imagesloaded':     'vendor/imagesloaded.pkgd.min',
	'qtip':             '//cdnjs.cloudflare.com/ajax/libs/qtip2/2.1.1/jquery.qtip.min',
        'logLevels':        'util/logLevels',
        'logger':           'util/logger',
        'cookieManager':    'util/cookieManager',
        'logConf':          'app/log-conf'
    },
});
requirejs(["app/app"]);
