
const inquirer = require('inquirer');
const fs = require('fs');

const generateHtml = (data) => {
    // console.log(data);
    const { name, location, bio, linkrdInURL, github, stack, contact } = data;
    return (

        `
        <!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Information</title>
        </head>
        
        <body>
            <h1>${name}</h1>
            <ul>
                <li>
                    <a href="${linkrdInURL}">LinkedIn</a>
                </li>
                <li><a href="${github}"></a></li>
                <li>${location}</li>
                <li>${bio}</li>
                <li>${stack}</li>
                <li>${contact}</li>
            </ul>
        </body>
        
        </html>
`
    )
};

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your location?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Write about yourself',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn URL',
            name: 'LinkedIn URL',
        },
        {
            type: 'input',
            message: 'What is your  GitHub URL',
            name: 'GitHub URL',
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
        const filename = `template.html`;

        fs.writeFile(filename, generateHtml(data) + ',', (err) => {
            err ? console.log(err) : console.log('Success!')
        }
        );
        // fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
        //     err ? console.error(err) : console.log('Commit logged!');

    });

// module.exports = {
//     generateHtml
// }

// const init = () => {
//       .then((data) => fs.writeFile(filename, generateHtml(data)));
// }
// init();
// //get names in a new array
// const studentsName = students
//   .filter(students => students.location.includes('Okaland'))
//   .map(students => { return { "name": students.name, "location": students.location } });

// const linkedInLinks = students
//   .filter(student => student.linkedIn)
//   .map(student => `<p><a href="${student.linkedIn}">${student.name}</a></p>`);
// console.log("linkedInLinks", linkedInLinks.join(""));

// $("#links").append(linkedInLinks.join(""));