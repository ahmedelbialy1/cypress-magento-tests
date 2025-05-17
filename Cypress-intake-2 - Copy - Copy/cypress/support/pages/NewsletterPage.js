class NewsletterPage {
  subscribeWithRandomEmail() {
    const randomEmail = `test${Math.floor(Math.random() * 10000)}@example.com`
    cy.get('#newsletter').type(`${randomEmail}{enter}`)
  }

  verifySubscription() {
    cy.get('.message-success').should('contain', 'Thank you for your subscription.')
  }
}
export default NewsletterPage
