
const fs = require('fs');
const Html = require('./utils/generateHtml');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');


const promptManager = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is your manager's ID?",
        name: "managerId"
    },
    {
        type: "input",
        message: "What is the team manager's email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is the team manager's office number?",
        name: "managerOffice"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No more team members to add"],
        name: "menuSelect"
    }
]

const addEngineer = [
    {
        type: "input",
        message: "What is your engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your engineer's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your engineer's GitHub Username?",
        name: "gitHub"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No more team members to add"],
        name: "menuSelect"
    }
];

const addIntern = [
    {
        type: "input",
        message: "What is your intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your intern's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is your intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your intern's school name?",
        name: "school"
    },
    {
        type: "list",
        message: "Which type of team member would you like to add?",
        choices: ["Engineer", "Intern", "No more team members to add"],
        name: "menuSelect"
    }
]

function engineerStart() {
    console.log("added engineer");
    inquirer.prompt(addEngineer).then((Response) => {
        // console.log(Response);
        const engineer = new Engineer(
            Response.name,
            Response.id,
            Response.email,
            "Engineer",
            Response.gitHub
        );
        let madeEngineer = Html.generateEngineer(engineer);
        fs.appendFile("./dist/index.html", madeEngineer, (err) => {
            err ? console.error(err) : console.log("engineer was appeneded");
        });
        // console.log(engineer);
        if (Response.menuSelect === "Engineer") {
            engineerStart();
        } else if (Response.menuSelect === "Intern") {
            internStart();
        } else {
            return;
        }
    })
}

function internStart() {
    console.log("You have added an intern");
    inquirer.prompt(addIntern).then((Response) => {
        // console.log(Response);
        const intern = new Intern(
            Response.name,
            Response.id,
            Response.email,
            "Intern",
            Response.school
        );
        let madeIntern = Html.generateIntern(intern);
        fs.appendFile("./dist/index.html", madeIntern, (err) => {
            err ? console.error(err) : console.log("intern was appended");
        });
        // console.log(intern);
        if (Response.menuSelect === "Engineer") {
            engineerStart();
        } else if (Response.menuSelect === "Intern") {
            internStart();
        } else {
            return;
        }
    });
}


function init() {
    inquirer.prompt(promptManager).then((Response) => {
        const manager = new Manager(
            Response.managerName,
            Response.managerId,
            Response.managerEmail,
            "Manager",
            Response.managerOffice
        );
        // console.log(manager);
        const madeHtml = Html.generateHtml(manager)
        fs.writeFile('index.html', madeHtml, function (err) {
                if (err){
                    console.error(err);
                }
                else {
                    console.log('Successfully wrote to README.md')
                }
            })

        if (Response.menuSelect === "Engineer") {
            engineerStart();
        } else if (Response.menuSelect === "Intern") {
            internStart();
        } else {
            return;
        }
    });
}
//When index.js is run, the program will start 
init();

