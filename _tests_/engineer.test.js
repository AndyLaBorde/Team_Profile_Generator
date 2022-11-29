const Engineer = require('../lib/engineer.js');

const engineerObj = new Engineer("Jimmy", 111, "Neutron@testmail.com", "Engineer", "JimmyNeutron91");

describe('Engineer', ()=>{
    describe('getName', () => {
        it('it should return the new engineer name', () => {

            const result = engineerObj.getName(engineerObj);

            expect(result).toEqual("Jimmy");
        })
    })
    describe('getEmail', () => {
        it('should return the new engineer email', () => {
            
            const result = engineerObj.getEmail(engineerObj);

            expect(result).toEqual("Neutron@testmail.com")
        })
    })
    describe('getId', () => {
        it('should return the new engineer id', () => {
            const result = engineerObj.getId(engineerObj)

            expect(result).toEqual(111)
        })
    })
    describe('getRole', () => {
        it('should return the new engineer role', () => {

            const result = engineerObj.getRole(engineerObj);

            expect(result).toEqual("Engineer");       
        })
    })
    describe('getGitHub', () => {
        it('should return the new engineer gitHub', () => {

            const result = engineerObj.getGitHub(engineerObj)

            expect(result).toEqual("JimmyNeutron91")
        })
    })
});