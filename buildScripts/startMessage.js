// var chalk = require('chalk'); now that we have babel configured we can use ES6 code
import chalk from 'chalk'; // now node will throw an error at runtime because it doesnt understand ES6 so in our package.json file we prefix the command "node" that call this file with babel-
console.log(chalk.green('Starting app in dev mode...')); // eslint-disable-line no-console