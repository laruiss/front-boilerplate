// RequireJS config
requirejs.config({
    baseUrl: 'js/',
    paths: {
        'underscore':       '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.0/underscore-min',
        'domReady':         '//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady.min',
        'text':             '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text.min',
    },
});
requirejs(["app/app"]);
