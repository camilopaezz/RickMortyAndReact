/// <reference types="Cypress" />

describe('can do a basic usage', () => {
  before(() => {
    cy.manageExceptions()
  })

  it('should access to homepage', () => {
    cy.visit('/')

    cy.contains('Welcome').should('be.visible')
  })

  it('should can see the characters list', () => {
    cy.contains('Characters').click()
    cy.get('.listOfCharacters__item').should('have.length.gt', 4)

    cy.contains('All Characters:').should('be.visible')
  })

  it('should can see the info of a character', () => {
    cy.get('.listOfCharacters__item').first().click()

    cy.contains('Character Info:').should('be.visible')
  })

  it('should can go to a location', () => {
    cy.contains('Location:').next().click()

    cy.contains('Location Info:').should('be.visible')
  })

  it('should can return to a character from the locations page', () => {
    cy.get('.characterCompact').first().click()

    cy.contains('Character Info:').should('be.visible')
  })

  it('should can see all episodes', () => {
    cy.contains('Episode').click()

    cy.contains('All Episodes:')
  })

  it('should can search morty and see it in the history', () => {
    cy.get('form').as('searchForm').get('input').type('morty')
    cy.get('@searchForm').submit()

    cy.contains('Search results of morty').should('be.visible')

    cy.contains('Home').click()

    cy.contains('Latest Search').next().contains('morty').should('be.visible')
  })
})
