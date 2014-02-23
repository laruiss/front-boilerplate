define(["jquery", "logger", "cookieManager", "qtip"], function($, logger, cm) {

	logger.log('Main module loaded');

	var bootstrap = function ()
	{
		logger.log('bootstrap() invoked');
		var lastLogin = cm.read('lastLogin');
		if (lastLogin) {
			$('footer .lastLogin').html(lastLogin);
		}
		// This will make the touch event detection available in the custom modernizr JS file
		// (see Gruntfile.js and https://github.com/Modernizr/grunt-modernizr) 
		if (Modernizr.touch) {
			$('#output').html("Browsing from touch device!");
		} else {
			$('#output').html("Browsing from has-been device!");
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