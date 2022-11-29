const inquirer = require('inquirer');
const fs = require('fs');
const Html = require('./utils/generateHtml.js');
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is The team members name?"   
        },
        {
            type: "choice",
            name: "role",
            message: "What is their role?",
            choices: ["Manager", "Engineer", "Intern"]
        },
        {
            type: "input",
            name: "email",
            message: "What is their email address?"
        }
    ]);
}

const promptUser2 = () => {
    return inquirer.prompt([
        {
            type: "choice",
            name: "roleQuestion",
            message: `${this.renderRoleQuestion(data)}`
        }
    ])
}

const init = () => {
    promptUser()
    promptUser2()
        .then((response) => {
            const html = Html.generateHtml(response)
            fs.writeFile('index.html', html, function (err) {
                if (err) {
                    console.log(err);
                }
                else {
                    conso0le.log('Successfully wrote to index.html')
                }
            })
        })
        .catch ((error) => {
            console.log(error);
        })
}

init ();