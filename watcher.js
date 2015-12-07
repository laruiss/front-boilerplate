'use strict';
var spawn = require('child_process').spawn;

function run_cmd(cmd, args, callBack) {
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function(buffer) {
        resp += buffer.toString()
    });
    child.stdout.on('end', function() {
        callBack(resp)
    });
}

var chokidar = require('chokidar');

var watcher = chokidar.watch('file, dir, or glob', {
    ignored: /[\/\\]\./,
    persistent: true
});

var log = console.log.bind(console);

watcher
    .on('add', function(path) {
        log('File', path, 'has been added');
    })
    .on('addDir', function(path) {
        log('Directory', path, 'has been added');
    })
    .on('change', function(path) {
        log('File', path, 'has been changed');
        if (path.match(/^.*\.html$/)) {
            run_cmd('npm', ['run', 'build:html'], log);
        } else if (path.match(/^.*\.js$/)) {
            run_cmd('npm', ['run', 'build:js'], log);
        } else if (path.match(/^.*\.scss$/)) {
            run_cmd('npm', ['run', 'build:css'], log);
        }
    });


// Watch files.
watcher.add(['public/index.html', 'public/js/**/*.js', 'sass/**/*.scss']);
