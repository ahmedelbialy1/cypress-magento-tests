class ProductPage {
  verifyProductPage() {
    cy.get('.page-title').should('exist')
    cy.get('.price').should('exist')
  }

  selectSizeM() {
    cy.get('div[option-label="M"]').click()
  }

  selectColorBlue() {
    cy.get('div[option-label="Blue"]').click()
  }

  addToCart() {
    cy.get('#product-addtocart-button').click()
  }

  verifyAddToCartSuccess() {
    cy.get('.message-success').should('contain', 'You added')
  }
}
export default ProductPage
