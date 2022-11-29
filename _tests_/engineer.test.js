const Engineer = require('../lib/engineer.js');



describe('Engineer', ()=>{
    describe('getName', () => {
        it('it should return the new engineer name', () => {
            const engineerObj = new Engineer("Jimmy", 111, "Neutron@testmail.com", "Engineer", "JimmyNeutron91");


            expect(engineerObj.getName(engineerObj)).toEqual("Jimmy");
        })
    })
    describe('getEmail', () => {
        it('should return the new engineer email', () => {
            const engineerObj = new Engineer("Jimmy", 111, "Neutron@testmail.com", "Engineer", "JimmyNeutron91");

            expect(engineerObj.getEmail(engineerObj)).toEqual("Neutron@testmail.com")
        })
    })
    describe('getId', () => {
        it('should return the new engineer id', () => {
            const engineerObj = new Engineer("Jimmy", 111, "Neutron@testmail.com", "Engineer", "JimmyNeutron91");

            expect(engineerObj.getId(engineerObj)).toEqual(111)
        })
    })
    describe('getRole', () => {
        it('should return the new engineer role', () => {
            const engineerObj = new Engineer("Jimmy", 111, "Neutron@testmail.com", "Engineer", "JimmyNeutron91");

            const result = engineerObj.getRole(engineerObj);

            expect(result).toEqual("Engineer");       
        })
    })
    describe('getGitHub', () => {
        it('should return the new engineer gitHub', () => {
            const engineerObj = new Engineer("Jimmy", 111, "Neutron@testmail.com", "Engineer", "JimmyNeutron91");

            const result = engineerObj.getGitHub(engineerObj)

            expect(result).toEqual("JimmyNeutron91")
        })
    })
});