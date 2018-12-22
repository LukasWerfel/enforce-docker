#!/usr/bin/env node
const isDocker = require('is-docker');
const meow = require('meow');

const cli = meow(`
	Usage
	  $ enforce-docker

	Options
	  --message, -m  Specify error message
`, {
	booleanDefault: undefined,
	flags: {
		message: {
			type: 'string',
			default: "Please execute inside a docker container",
			alias: 'm'
		},
	}
});

if (!isDocker()) {
	throw new Error(cli.flags.message)
}
