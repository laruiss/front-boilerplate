define(function(require, exports, module) {
    var _ = require('underscore'),
        $ = require('jquery'),
        logger = require("logger"),
        qtip = require("qtip"),
        cm = require("cookieManager");

    logger.log('Main module loaded');

    var bootstrap = function ()
    {
        logger.log('bootstrap() invoked');
        var lastLogin = cm.read('lastLogin');
        if (lastLogin) {
            $('footer .lastLogin').html(lastLogin);
        }
        cm.create('lastLogin', new Date());
        $('h1').qtip({
            content: {
                title: 'qTip2 is a wonderful jQuery plugin!',
                text: 'qTip2 has been loaded!'
            },
            position: { my: 'top center', at: 'bottom center' }
        });
    };

    $(function() {
        logger.log('DOM is ready');
        bootstrap();
    });
});