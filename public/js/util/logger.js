var logLevels = require('./logLevels'),
  logConf = require('../app/log-conf'),
  method,
  noop = function() {},
  console = window.console || {},
  methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml',
    'error', 'exception', 'group', 'groupCollapsed', 'groupEnd',
    'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table',
    'time', 'timeEnd', 'timeStamp', 'trace', 'warn'
  ],
  length = methods.length;

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

export default console;
