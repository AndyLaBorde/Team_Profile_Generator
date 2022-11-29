const Manager = require('../lib/manager.js');

const managerObj = new Manager("Karen", 444, "karen@testmail.com", "Manager", 789);

describe('Manager', ()=>{
    describe('getName', () => {
        it('it should return the new manager name', () => {

            const result = managerObj.getName(managerObj);

            expect(result).toEqual("Karen");

        })
    })
    describe('getEmail', () => {
        it('should return the new manager email', () => {

            const result = managerObj.getEmail(managerObj);

            expect(result).toEqual("karen@testmail.com");

        })
    })
    describe('getId', () => {
        it('should return the new manager id', () => {

            const result = managerObj.getId(managerObj);

            expect(result).toEqual(444);

        })
    })
    describe('getRole', () => {
        it('should return the new manager role', () => {

            const result = managerObj.getRole(managerObj);

            expect(result).toEqual("Manager");   
            
        })
    })
    describe('getOfficeNum', () => {
        it('should return the new manager office number', () => {

            const result = managerObj.getOfficeNum(managerObj);

            expect(result).toEqual(789);

        })
    })
});