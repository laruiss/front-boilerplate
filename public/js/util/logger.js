define(function(require, exports, module) {

    var logLevels = require('logLevels');
    var logConf = require('logConf')
	var method;
	var noop = function () {};
	var methods = [ 'assert', 'clear', 'count', 'debug', 'dir', 'dirxml',
			'error', 'exception', 'group', 'groupCollapsed', 'groupEnd',
			'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table',
			'time', 'timeEnd', 'timeStamp', 'trace', 'warn' ];
	var length = methods.length;
	var console = window.console || {};

	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method]) {
			console[method] = noop;
		}
	}

	if (logConf && logConf.logLevel < logLevels.DEBUG) {
		console.debug = noop;
		console.trace = noop;
	}

	if (logConf && logConf.logLevel < logLevels.INFO) {
		console.info = noop;
		console.log = noop;
	}

	if (logConf && logConf.logLevel < logLevels.WARN) {
		console.warn = noop;
	}

	module.exports = console;

});