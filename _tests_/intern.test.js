const Intern = require('../lib/intern.js');

const internObj = new Intern("Carl", 3, "llamapallooza@testmail.com", "Intern", "DU");

describe('Intern', ()=>{
    describe('getName', () => {
        it('it should return the new intern name', () => {
            expect(internObj.getName(internObj)).toEqual("Carl")
        })
    })
    

    describe('getEmail', () => {
        it('should return the new intern email', () => {
            expect(internObj.getEmail(internObj)).toEqual("llamapallooza@testmail.com")
        })
    })

    describe('getId', () => {
        it('should return the new intern id', () => {
            expect(internObj.getId(internObj)).toEqual(3)
        })
    })

    describe('getRole', () => {
        it('should return the new intern role', () => {
            expect(internObj.getRole(internObj)).toEqual("Intern")        
        })
    })

    describe('getSchool', () => {
        it('should return the new intern school', () => {
            expect(internObj.getSchool(internObj)).toEqual("DU")
        })
    })
});