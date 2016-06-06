/* globals Modernizr */
import $ from 'jquery';
import logger from '../util/logger.js';
import cm from '../util/cookieManager.js';
import '../../css/main.css';


logger.log('Main module loaded');

var bootstrap = function() {
    logger.log('bootstrap() invoked');
    var lastLogin = cm.read('lastLogin');
    if (lastLogin) {
        $('footer .lastLogin').html(lastLogin);
    }
    // This will make the touch event detection available in the custom modernizr JS file
    // (see gulp/scripts.js and https://github.com/doctyper/gulp-modernizr)
    if (Modernizr.touchevents) {
        $('#output').html('Browsing from touch device!');
    } else {
        $('#output').html('Browsing from has-been device!');
    }
    cm.create('lastLogin', new Date());
};

$(function() {
    logger.log('DOM is ready');
    bootstrap();
});
