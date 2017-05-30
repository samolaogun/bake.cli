# bake.cli

## Basic Usage

bake.cli is a command-line tool derived from bake.core. You can use it to transform any JSON object into an XML document. For pragmatic use, install it globally. Otherwise, install it locally.

```bash
# global usage
npm install -g bake.cli

# local usage
npm install bake.cli
```

Great! If you installed bake.cli for global usage, bake.cli is accessible through the command line with the bake command. Otherwise, you must navigate to the `.bin` in the `node_modules` directory.

```bash
# if installed globally
bake path/to/json path/to/xml

# if installed locally
./node_modules/.bin/bake path/to/json path/to/xml
```

The flags available mimic the configurations of bake.core. To view them, use the help option `bake -h`. Alternatively, you make specify your configurations in a `.bakerc` dotfile, just as you may with bake.cli.

## License

See it [here](http://github.com/samolaogun/bake.cli/blob/master/LICENSE).