Cypress.Commands.add('manageExceptions', () => {
  cy.on('uncaught:exception', (err) => {
    console.log(err.message)

    if (
      err.message.includes(
        'can\'t access property "url", data.location is undefined'
      )
    ) {
      return false
    }

    return true
  })
})
