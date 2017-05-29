#!/usr/bin/env node


/**
 * bake.cli
 * 
 * @author  Sam Olaogun
 * @since   1.0.0
 * @license MIT
 */
'use strict';

var _bake = require('bake.core');

var _bake2 = _interopRequireDefault(_bake);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _process = require('process');

var _process2 = _interopRequireDefault(_process);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var help = '\nUsage: bake [options] [sourceFile] [outputFile]\n\nOptions:\n    -b, --bare             unformatted document\n    -u, --undo-prolog      remove prolog\n\n';

var mapFlags = {
    '-b': { format: false },
    '-u': { prolog: '' }
};

_process2.default.on('uncaughtException', function (err) {
    return _fs2.default.writeSync(1, 'bake-core: "' + err + '"\n');
});

var applyFlags = function applyFlags(flags) {
    return flags.map(function (flag) {
        return flag.startsWith('--') ? flag.slice(1, 3) : flag;
    }).forEach(function (flag) {
        return config = Object.assign({}, config, mapFlags[flag]);
    });
};

var config = {};
var args = _process2.default.argv.slice(2);

var fileArgs = args.filter(function (arg) {
    return !(arg.startsWith('--') || arg.startsWith('-'));
});

var flags = args.filter(function (arg) {
    return arg.startsWith('--') || arg.startsWith('-');
}).map(function (arg) {
    return arg.startsWith('--') ? arg.slice(1, 3) : arg;
});

var doProcess = flags.every(function (flag) {
    if (flag === '-h') {
        _fs2.default.writeSync(1, help);
        return false;
    }

    return true;
});

if (doProcess) {
    var _ref;

    var sourceFile = void 0,
        outputFile = false,
        opts = [];

    fileArgs.length > 1 ? (_ref = [fileArgs.slice(-2, -1)[0], fileArgs.slice(-1)[0]], sourceFile = _ref[0], outputFile = _ref[1], _ref) : fileArgs[0] ? sourceFile = fileArgs[0] : null;

    applyFlags(flags);

    outputFile ? (0, _bake2.default)(config)(sourceFile, outputFile) : _fs2.default.writeSync(1, (0, _bake2.default)(config)(sourceFile));
}

