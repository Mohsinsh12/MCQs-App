
import chalk from 'chalk';
import { mcqs } from './MCQs-0.js';

let noOfMcqs = 0;

if (mcqs.Q_No_1 === 'latest') {
    noOfMcqs++;
    console.log(chalk.bgGreen.white('Correct!!'))
} else {
    console.log(chalk.bgRed.white('Wrong answer'));
}
if (mcqs.Q_No_2 === 'Boolean') {
    console.log(chalk.bgGreen.white('Correct!!'))
    noOfMcqs++;
}else {
    console.log(chalk.bgRed.white('Wrong answer'));
}
if (mcqs.Q_No_3 === 'True') {
    console.log(chalk.bgGreen.white('Correct!!'))
    noOfMcqs++;
}else {
    console.log(chalk.bgRed.white('Wrong answer'));
}
if (mcqs.Q_No_4 === 'string[]') {
    console.log(chalk.bgGreen.white('Correct!!'))
    noOfMcqs++;
}else {
    console.log(chalk.bgRed.white('Wrong answer'));
}
if (mcqs.Q_No_5 === 3) {
    console.log(chalk.bgGreen.white('Correct!!'))
    noOfMcqs++;
}else {
    console.log(chalk.bgRed.white('Wrong answer'));
}
if (mcqs.Q_No_6 === 'case sensitive') {
    console.log(chalk.bgGreen.white('Correct!!'))
    noOfMcqs++;
}else {
    console.log(chalk.bgRed.white('Wrong answer'));
}
if (mcqs.Q_No_7 === 2) {
    console.log(chalk.bgGreen.white('Correct!!'))
    noOfMcqs++;
}else {
    console.log(chalk.bgRed.white('Wrong answer'));
}
if (mcqs.Q_No_8 === 'False') {
    console.log(chalk.bgGreen.white('Correct!!'))
    noOfMcqs++;
}else {
    console.log(chalk.bgRed.white('Wrong answer'));
}
if (mcqs.Q_No_9 === 'string') {
    console.log(chalk.bgGreen.white('Correct!!'))
    noOfMcqs++;
}else {
    console.log(chalk.bgRed.white('Wrong answer'));
}
if (mcqs.Q_No_10 === 'true') {
    console.log(chalk.bgGreen.white('Correct!!'))
    noOfMcqs++;
}else {
    console.log(chalk.bgRed.white('Wrong answer'));
}

console.log(`You have got ${noOfMcqs} marks`);
if (noOfMcqs <= 5) {
    console.log("Poor Performance");
} else if (noOfMcqs >= 6 && noOfMcqs <= 8) {
    console.log('Good Performance');
} else {
    console.log('Excellent Performance');
}

export { noOfMcqs }