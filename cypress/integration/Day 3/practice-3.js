describe('kumpulan test case', function () {
    it('tc-1', function () {
        cy.visit('https://bukalapak.com')
     //   cy.get('h1').contains('practice')
     // * There are two ways   
        cy.get('.bl-link > .pr-4').contains('Daftar')
        cy.contains('Daftar').click()
        cy.get('.bl-text-field__input').type('Aku!').should('have.value', 'Aku!')
    })

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})