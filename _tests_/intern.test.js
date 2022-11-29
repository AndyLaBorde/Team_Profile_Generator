const Intern = require('../lib/intern.js');

const internObj = new Intern("Carl", 3, "llamapallooza@testmail.com", "Intern", "DU");

describe('Intern', ()=>{
    describe('getName', () => {
        it('it should return the new intern name', () => {
            expect(internObj).getName().toEqual("Carl")
        })
    })
    

    describe('getEmail', () => {
        it('should return the new intern email', () => {
            expect(internObj).getEmail().toEqual("llamapallooza@testmail.com")
        })
    })

    describe('getId', () => {
        it('should return the new intern id', () => {
            expect(internObj).getId().toEqual(111)
        })
    })

    describe('getRole', () => {
        it('should return the new intern role', () => {
            expect(internObj).getRole().toEqual("Intern")        
        })
    })

    describe('getSchool', () => {
        it('should return the new intern school', () => {
            expect(internObj).getSchool().toEqual("DU")
        })
    })
});