// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  });
  


  // Home Page commands
Cypress.Commands.add('visitHomePage', () => {
  cy.visit('https://magento.softwaretestingboard.com/')
})

Cypress.Commands.add('searchProduct', (product) => {
  cy.get('#search').type(`${product}{enter}`)
})

// Product commands
Cypress.Commands.add('selectSize', (sizeLabel = 'M') => {
  cy.get(`div[option-label="${sizeLabel}"]`).click()
})

Cypress.Commands.add('selectColor', (colorLabel = 'Blue') => {
  cy.get(`div[option-label="${colorLabel}"]`).click()
})

Cypress.Commands.add('addToCart', () => {
  cy.get('#product-addtocart-button').click()
})

// Cart commands
Cypress.Commands.add('openMiniCart', () => {
  cy.get('.showcart').click()
})

// Newsletter
Cypress.Commands.add('subscribeNewsletter', () => {
  const email = `test${Math.floor(Math.random() * 10000)}@example.com`
  cy.get('#newsletter').type(`${email}{enter}`)
})

  