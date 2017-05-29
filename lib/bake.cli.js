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
import program from 'commander';

process.on('uncaughtException', e => {
    fs.writeSync(1, `bake.core: "${e}"\n`);
});

program
    .version('1.0.1')
    .usage('[options] [sourceFile [,outputFile]]')
    .option('-f, --format', 'unformatted document')
    .option('-p, --prolog', 'remove prolog')
    .option('-pa, --parent [name]', 'add wrapper with name')
    .option('-s, --strict', 'strict content parsing')
    .option('-ai, --attribute-indentifier [name]', 'set content identifier')
    .option('-ci, --content-identifier [name]', 'set content identifier')
    .parse(process.argv);

bake(program)(...program.args.splice(0, 2));