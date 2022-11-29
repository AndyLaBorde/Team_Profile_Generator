const Intern = require('../lib/intern.js');

const internObj = new Intern("Carl", 3, "llamapallooza@testmail.com", "Intern", "DU");

describe('Intern', ()=>{
    describe('getName', () => {
        it('it should return the new intern name', () => {

            const result = internObj.getName(internObj);

            expect(result).toEqual("Carl");
            
        })
    })
    

    describe('getEmail', () => {
        it('should return the new intern email', () => {

            const result = internObj.getEmail(internObj);

            expect(result).toEqual("llamapallooza@testmail.com");

        })
    })

    describe('getId', () => {
        it('should return the new intern id', () => {

            result = internObj.getId(internObj);

            expect(result).toEqual(3);

        })
    })

    describe('getRole', () => {
        it('should return the new intern role', () => {

            const result = internObj.getRole(internObj);

            expect(result).toEqual("Intern");   
        
        })
    })

    describe('getSchool', () => {
        it('should return the new intern school', () => {

            const result = internObj.getSchool(internObj);

            expect(result).toEqual("DU");

        })
    })
});