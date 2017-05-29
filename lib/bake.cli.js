#!/usr/bin/env node

/**
 * bake.cli
 * 
 * @author  Sam Olaogun
 * @since   1.0.0
 * @license MIT
 */
'use strict';

import bake from 'bake.core';
import fs from 'fs';
import process from 'process';

const help = `
Usage: bake [options] [sourceFile] [outputFile]

Options:
    -b, --bare             unformatted document
    -u, --undo-prolog      remove prolog

`;

const mapFlags = {
    '-b': { format: false },
    '-u': { prolog: '' }
};

process.on('uncaughtException', (err) => fs.writeSync(1, `bake-core: "${err}"\n`));

const applyFlags = flags => flags
    .map(flag => flag.startsWith('--') ? flag.slice(1, 3) : flag)
    .forEach(flag => config = Object.assign({}, config, mapFlags[flag]));

let config = {};
const args = process.argv.slice(2);

const fileArgs = args.filter(arg => !(arg.startsWith('--') || arg.startsWith('-')));

const flags = args
    .filter(arg => arg.startsWith('--') || arg.startsWith('-'))
    .map(arg => arg.startsWith('--') ? arg.slice(1, 3) : arg);

const doProcess = flags.every(flag => {
    if (flag === '-h') {
        fs.writeSync(1, help)
        return false;
    }

    return true;
});

if (doProcess) {
    let sourceFile,
        outputFile = false,
        opts = [];

    fileArgs.length > 1 ? [sourceFile, outputFile] = [fileArgs.slice(-2, -1)[0], fileArgs.slice(-1)[0]] :
        (fileArgs[0] ? sourceFile = fileArgs[0] : null);

    applyFlags(flags);

    outputFile ?
        bake(config)(sourceFile, outputFile) :
        fs.writeSync(1, bake(config)(sourceFile));
}