const inquirer = require('inquirer');
const fs = require('fs');



inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'checkbox',
            message: 'What languages do you know?',
            name: 'stack',
            choices: ['html', 'css', 'JavaScript', 'Java']
        },
        {
            type: 'list',
            message: 'What is your preferred method of communication?',
            name: 'contact',
            choices: ['email', 'phone', 'text']
        },
    ]).then((data) => {
        const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
            err ? console.log(err) : console.log('Success!')
        );
    });
