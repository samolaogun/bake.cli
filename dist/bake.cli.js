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

var _commander = require('commander');

var _commander2 = _interopRequireDefault(_commander);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

process.on('uncaughtException', function (e) {
    _fs2.default.writeSync(1, 'bake.core: "' + e + '"\n');
});

_commander2.default.version('1.0.1').usage('[options] [sourceFile [,outputFile]]').option('-f, --format', 'unformatted document').option('-p, --prolog', 'remove prolog').option('-pa, --parent [name]', 'add wrapper with name').option('-s, --strict', 'strict content parsing').option('-ai, --attribute-indentifier [name]', 'set content identifier').option('-ci, --content-identifier [name]', 'set content identifier').parse(process.argv);

(0, _bake2.default)(_commander2.default).apply(undefined, _toConsumableArray(_commander2.default.args.splice(0, 2)));

