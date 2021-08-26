/* describe('kumpulan test case', function () {
it('tc-1', function () {
    cy.bukaUrl()
})
}) */

describe('Demoblaze', function () {
    it('Registration', function () {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#signin2').click()
        cy.get('#sign-username').type('dojo-tesdaftar1234').should('have.value', 'dojo-tesdaftar1234')
        cy.get('#sign-password').type('dojobox').should('have.value', 'dojobox')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        
    })
   it('Login', function () {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.wait(5000)
        cy.get('#loginusername').type('dojo-tesdaftar1234')
        cy.get('#loginusername').should('have.value', 'dojo-tesdaftar1234')
        cy.get('#loginpassword').type('dojobox').should('have.value', 'dojobox')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should('have.text','Welcome dojo-tesdaftar123')
    })
    it('Buying', function () {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.wait(3000)
        cy.get('#loginusername').type('dojo-tesdaftar123')
        cy.get('#loginusername').should('have.value', 'dojo-tesdaftar123')
        cy.get('#loginpassword').type('dojobox').should('have.value', 'dojobox')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#nameofuser').should('have.text','Welcome dojo-tesdaftar123')
        cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
        cy.get('.name').should('have.text', 'Samsung galaxy s6')
        cy.get('.col-sm-12 > .btn').click()
        cy.get('#cartur').click()
        cy.get('.success > :nth-child(2)').should('have.text', 'Samsung galaxy s6')
        cy.get('.col-lg-1 > .btn').click()
        cy.get('#orderModalLabel').should('have.text', 'Place order')
        cy.get('#name').type('Nama').should('have.value', 'Nama')
        cy.get('#country').type('Indonesia').should('have.value', 'Indonesia')
        cy.get('#city').type('Bandung').should('have.value', 'Bandung')
        cy.get('#card').type('11111').should('have.value', '11111')
        cy.get('#month').type('June').should('have.value', 'June')
        cy.get('#year').type('2021').should('have.value', '2021')
        cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!')
        cy.get('.confirm').click()
        cy.wait(3000)
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })
})