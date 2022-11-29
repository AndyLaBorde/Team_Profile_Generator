const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(name, id, email, role, officeNum){
        super(name, id, email, role)
        this.officeNum = officeNum;
        this.role = 'Manager';
    }

    getOfficeNum () {
        return this.officeNum;
        
    }
}

module.exports = Manager;