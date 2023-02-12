#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import { exec } from 'child_process';
import prompt from 'prompt';

console.log(chalk.blue('Hello world!'));
console.log(boxen("I can't seem to think outside of the box!"))
exec("chmod +x say.sh");


console.log(boxen('press: \n 1. To work with terraform \n 2. To work with Docker', {padding: 1, margin: 1, borderStyle: 'double'}));

console.log("\n")
// prompt.get(['option'], function (err, result) {
//     console.log('Command-line input received:');
//     console.log('  selected option: ' + result.option);
// });

exec("./say.sh",(error, o) => {
        console.log(boxen(o))
    if (error) {
            console.log(boxen(chalk.bgRedBright("Flip! something went wrong, see error below")))
        console.log(boxen(chalk.redBright(error)))
    }
})
