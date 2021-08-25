describe('kumpulan test case', function () {
    it('tc-1', function () {
        cy.visit('https://courses.letskodeit.com/practice')
        cy.get('h1').contains('practice')
        
       
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})

