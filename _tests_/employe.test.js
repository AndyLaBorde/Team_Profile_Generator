const Employee = require('../lib/employee.js');

const employeeObj = new Employee("Andy", 111, "andy@testmail.com", "Employee");

describe('Employee', ()=>{
    describe('getName', () => {
        it('it should return the new employee name', () => {
            expect(employeeObj).getName().toEqual("Andy")
        })
    })
    

    describe('getEmail', () => {
        it('should return the new employee email', () => {
            expect(employeeObj).getEmail().toEqual("andy@testmail.com")
        })
    })

    describe('getId', () => {
        it('should return the new employee id', () => {
            expect(employeeObj).getId().toEqual(111)
        })
    })

    describe('getRole', () => {
        it('should return the new employee role', () => {
            expect(employeeObj).getName().toEqual("Employee")        
        })
    })
});
