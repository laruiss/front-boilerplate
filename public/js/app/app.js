define(function(require, exports, module) {
    var _ = require('underscore'),
    	$ = require('jquery')
	logger = require("logger");

    logger.log('Main module loaded');

    var bootstrap = function ()
    {
    	logger.log('bootstrap() invoked');
    };

    $(function() {
    	logger.log('DOM is ready');
        bootstrap();
    });
});