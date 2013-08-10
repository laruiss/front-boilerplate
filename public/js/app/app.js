define(function(require, exports, module) {
    var _ = require('underscore'),
    	$ = require('jquery')
	logger = require("logger"),
	cm = require("cookieManager");

    logger.log('Main module loaded');

    var bootstrap = function ()
    {
    	logger.log('bootstrap() invoked');
	var lastLogin = cm.read('lastLogin');
	if (lastLogin) {
		$('footer .lastLogin').html(lastLogin);
		cm.create('lastLogin', new Date());
	} else {
		cm.create('lastLogin', new Date());
	}
    };

    $(function() {
    	logger.log('DOM is ready');
        bootstrap();
    });
});