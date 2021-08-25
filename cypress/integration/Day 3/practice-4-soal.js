describe('kumpulan test case', function () {
    it('tc-1', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('#et_pb_contact_name_0').type('Tes Nama').should('have.value', 'Tes Nama')
        cy.get('#et_pb_contact_email_0').type('initesemail@email.com').should('have.value', 'initesemail@email.com')
        cy.get('.et_pb_contact_submit').click()
    })

    it('tc-2', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="male"]').check().should('be.checked')
    })

    it('tc-3', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('[value="Bike"]').check().should('be.checked')
        cy.get('[value="Car"]').check().should('be.checked')
    }) 

    it('tc-4', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('select').select('Audi').should('have.value','audi')
    }) 

    it('tc-5', function () {
        cy.visit('https://ultimateqa.com/simple-html-elements-for-automation/')
        cy.get('.et_pb_cta_0 > .et_pb_button_wrapper > .et_pb_button').click()
        cy.get('.entry-title').should('have.text', 'Button success')
    })
    

    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})