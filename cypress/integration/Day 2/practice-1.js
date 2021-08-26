describe('kumpulan test case', function () {
    it('tc-1', function () {
        cy.visit('https://demoqa.com/automation-practice-form')
        
        // * Isi First name
        cy.get('#firstName').type('Mila')

        // * Isi Last name
        cy.get('#lastName').type('Mala')
        
        // * Isi email
        cy.get('#userEmail').type('cobaemail@email.com')

        // * Check gender
        cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click()

        // * Input mobile number
        cy.get('#userNumber').type('081212121')

        // * Check hobbies
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(1)').click()

        // * Isi current address
        cy.get('#currentAddress').type('Jalan Soekarno Hatta')

        // * Click button submit
        cy.get('#submit').click()
        
    })
    Cypress.on('uncaught:exception', (err, runnable)=>{
        return false
    })

})
