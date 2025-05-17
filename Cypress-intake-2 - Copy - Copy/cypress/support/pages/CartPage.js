class CartPage {
  openMiniCart() {
    cy.get('.showcart').click()
  }

  verifyMiniCart() {
    cy.get('.minicart-items').should('exist')
    cy.get('.product-item-name').should('exist')
  }
}
export default CartPage
