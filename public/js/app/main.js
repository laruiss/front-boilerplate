// RequireJS config
requirejs.config({
    baseUrl: 'js/',
    paths: {
    	"jquery":           '//cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min',
        'underscore':       '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.0/underscore-min',
        'text':             '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text.min',
    },
});
requirejs(["app/app"]);
