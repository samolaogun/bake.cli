#!/usr/bin/env node


/**
 * bake.cli
 * 
 * @author  Sam Olaogun
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
    return _fs2.default.writeSync(1, 'bake.core: "' + e + '"\n');
});

var parent = function parent(arg) {
    return _commander2.default.parent = JSON.parse(arg);
};

_commander2.default.version('1.0.1').usage('[options] [sourceFile [,outputFile]]').option('-p, --parent [json]', 'top level parent obj', parent).option('-a, --attr', 'enable attribute-content syntax').option('-a, --attribute-indentifier [name]', 'set content identifier').option('-c, --content-identifier [name]', 'set content identifier').option('-s, --strict', 'strict content parsing').option('-u, --unformat', 'unformatted document').option('-l, --prolog [prolog]', 'specify prolog').parse(process.argv);

var result = (0, _bake2.default)(_commander2.default).apply(undefined, _toConsumableArray(_commander2.default.args.splice(0, 2)));
if (result) _fs2.default.writeSync(1, result + '\n');

