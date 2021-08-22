/// <reference types="Cypress" />

beforeEach(() => {
  cy.manageExceptions()
  cy.visit('/')
})

it('should can navigate to a character', () => {
  cy.get('a:contains("Characters")').click()

  // This is because loading spinner sometimes cover it
  cy.get('p:contains("Rick Sanchez")').click({ force: true })
})

it('should search characters called morty', () => {
  cy.get('input[type=text]').type('Morty')
  cy.get('form').submit()

  cy.get('p:contains("Artist Morty")').click()
})

it('Should go from a character to a world', () => {
  cy.visit('/character/2')

  cy.get('b:contains("Location:")').next().click()
  cy.get('h1.location__title').should('be.visible')
})
