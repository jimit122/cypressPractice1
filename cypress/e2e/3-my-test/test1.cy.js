/// <reference types="cypress" />
context('Google Window', () => {
    beforeEach(() => {
      cy.visit('https://www.amazon.com')
    })


it ('Search Google',() =>{
  //cy.get('#APjFqb').type('Hello World')
  cy.get('[title="Search For"]').type('Nike Shoes{enter}')
  cy.get('[class="a-section a-spacing-small a-spacing-top-small"]').should('contain.text', 'results')
})
})
