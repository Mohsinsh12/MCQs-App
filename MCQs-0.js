import inquirer from 'inquirer';
const mcqs = await inquirer.prompt([
    {
        name: 'Q_No_1',
        type: 'list',
        message: 'Why are we using inquirer',
        choices: ['handy', 'latest', 'older', 'unknown reason']
    },
    {
        name: 'Q_No_2',
        type: 'list',
        message: 'one of the following is type of typescript',
        choices: ['set', 'let', 'True', 'Boolean']
    },
    {
        name: 'Q_No_3',
        type: 'list',
        message: 'Typescript infers the type of a variable?',
        choices: ['Dont know', 'True', 'False']
    },
    {
        name: 'Q_No_4',
        type: 'list',
        message: 'What is the inherited type for the variable example in "const example = ["Dylan"]"?',
        choices: ['any', 'string', 'string[]', 'boolean']
    },
    {
        name: 'Q_No_5',
        type: 'list',
        message: 'How many components typescript has?',
        choices: [3, 4, 5, 6]
    },
    {
        name: 'Q_No_6',
        type: 'list',
        message: 'TypeScript is ?',
        choices: ['case sensitive', 'case insensitive', 'none']
    },
    {
        name: 'Q_No_7',
        type: 'list',
        message: 'TypeScript supports how many types of comments?',
        choices: [3, 4, 2, 1]
    },
    {
        name: 'Q_No_8',
        type: 'list',
        message: 'True or False: a Tuple and an Array are the same thing when discussing types',
        choices: ['true', 'False', 'unknown reason']
    },
    {
        name: 'Q_No_9',
        type: 'list',
        message: 'Type Aliases are mostly used with __.',
        choices: ['string', 'number', 'Boolean', 'unknown reason']
    },
    {
        name: 'Q_No_10',
        type: 'list',
        message: 'Interfaces are similar to type aliases, but only for object types?',
        choices: ['true', 'False', 'unknown reason']
    }
]);
export { mcqs };
