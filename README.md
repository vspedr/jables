# jables :guitar:
## Jest + Babel template for npm modules

[![Build Status](https://travis-ci.org/vspedr/jables.svg?branch=master)](https://travis-ci.org/vspedr/jables)
[![Greenkeeper badge](https://badges.greenkeeper.io/vspedr/jables.svg)](https://greenkeeper.io/)
[![Maintainability](https://api.codeclimate.com/v1/badges/8b4adc5619fd52a44f64/maintainability)](https://codeclimate.com/github/vspedr/jables/maintainability)

A simple, opinionated way to bootstrap a npm module, written in ES6+ and transpiled/minified into ES5.

### Usage

Dead simple. Fork this repo into your account, or run
`git clone https://github.com/vspedr/jables` and hack away. Make sure you update any relevant information in `package.json` before publishing a module.

### Scripts
- `build`: transpiles and minifies all code in `./src` into `./lib` using babel;
- `lint`: lints code in `./src` using `eslint`;
- `precommit`: (automatic) runs linter before every commit;
- `prepublish`: (automatic) runs tests before attempting to publish the package;
- `test`: runs tests in `__tests__` using `jest`.

**Note**: scripts assume you use `yarn`, because you should ;)

> Dio can you hear me, I am lost and so alone - J.B.
