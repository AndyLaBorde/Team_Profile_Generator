const Employee = require('../lib/employee');

class Engineer extends Employee {
    constructor(name, id, email, role, gitHub){
        super(name, id, email, role)
        this.gitHub = gitHub;
    }
    
    getGitHub() {
        return this.gitHub;
    }
}
module.exports = Engineer;
console.log(Engineer.getGitHub)