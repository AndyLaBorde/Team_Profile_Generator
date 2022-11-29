const Manager = require('../lib/manager.js');

const managerObj = new Manager("Karen", 444, "karen@testmail.com", "Manager", 789);

describe('Manager', ()=>{
    describe('getName', () => {
        it('it should return the new manager name', () => {
            expect(managerObj).getName().toEqual("Carl")
        })
    })
    describe('getEmail', () => {
        it('should return the new manager email', () => {
            expect(managerObj).getEmail().toEqual("karen@testmail.com")
        })
    })
    describe('getId', () => {
        it('should return the new manager id', () => {
            expect(managerObj).getId().toEqual(111)
        })
    })
    describe('getRole', () => {
        it('should return the new manager role', () => {
            expect(managerObj).getRole().toEqual("Manager")        
        })
    })
    describe('getOfficeNum', () => {
        it('should return the new manager office number', () => {
            expect(managerObj).getOfficeNum().toEqual(789)
        })
    })
});