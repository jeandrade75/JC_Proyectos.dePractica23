// Hooks -> Mocha

/* --
1. before () UNA VEZ , al principio
2. beforeEach() Antes de cada test
3. TEST EXECUTION
4. afterEach () despues de cada TEST
5. beforeEach()
6. TEST EXECUTION
7. afterEach ()
8. after () UNA VEZ , al final
*/

describe ('Demo de Hooks', function (){

    before(function(){
        cy.log ('Before')
    })

    beforeEach(function(){
        cy.log ('Before Each')
    })

    it ('Should be Test#1', function(){
        console.log ('test #1')
    })
    it ('Should be Test#2', function(){
        console.log ('test #3')
    })
    it ('Should be Test#3', function(){
        console.log ('test #3')
    })

    afterEach(function(){
        cy.log ('after Each')
    })

    after(function(){
        cy.log ('After')
    })
})
