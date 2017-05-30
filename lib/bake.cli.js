#!/usr/bin/env node

/**
 * bake.cli
 * 
 * @author  Sam Olaogun
 * @license MIT
 */
'use strict';

import bake from 'bake.core';
import fs from 'fs';
import program from 'commander';

process.on('uncaughtException', e => fs.writeSync(1, `bake.core: "${e}"\n`));

const parent = arg => program.parent = JSON.parse(arg);

program
    .version('1.0.1')
    .usage('[options] [sourceFile [,outputFile]]')
    .option('-p, --parent [json]', 'top level parent obj', parent)
    .option('-e, --attr', 'enable attribute-content syntax')
    .option('-a, --attribute-indentifier [name]', 'set content identifier')
    .option('-c, --content-identifier [name]', 'set content identifier')
    .option('-s, --strict', 'strict content parsing')
    .option('-u, --unformat', 'unformatted document')
    .option('-l, --prolog [prolog]', 'specify prolog')
    .parse(process.argv);

const result = bake(program)(...program.args.splice(0, 2));
if (result) fs.writeSync(1, `${result}\n`);