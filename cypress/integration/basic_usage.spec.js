/// <reference types="Cypress" />

function goToMorty () {
  cy.visit('/character/2')
}

beforeEach(() => {
  cy.visit('/')
})

it('should can navigate to a character', () => {
  cy.contains('Welcome to Rick Morty And React')
  cy.contains('Characters').click()

  cy.get('p:contains("Rick Sanchez")').click()
})

it('should search characters called morty', () => {
  cy.get('input[type=text]').type('Morty')
  cy.get('form').submit()

  cy.get('p:contains("Artist Morty")').click()
})

it('Should go from a character to a world', () => {
  goToMorty()

  cy.get('b:contains("Location:")').next().click()
  cy.get('h1.location__title').should('be.visible')
})
