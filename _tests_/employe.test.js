const Employee = require('../lib/employee.js');

const employeeObj = new Employee("Andy", 111, "andy@testmail.com", "Employee");

describe('Employee', ()=>{
    describe('getName', () => {
        it('it should return the new employee name', () => {

            const result = employeeObj.getName(employeeObj);

            expect(result).toEqual("Andy");
        })
    })
    

    describe('getEmail', () => {
        it('should return the new employee email', () => {
            const result = employeeObj.getEmail(employeeObj);

            expect(result).toEqual("andy@testmail.com");

        })
    })

    describe('getId', () => {
        it('should return the new employee id', () => {

            const result = employeeObj.getId(employeeObj);

            expect(result).toEqual(111)
        })
    })

    describe('getRole', () => {
        it('should return the new employee role', () => {

            const result = employeeObj.getRole(employeeObj);

            expect(result).toEqual("Employee");

        })
    })
});
