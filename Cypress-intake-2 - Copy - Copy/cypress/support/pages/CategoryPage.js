class CategoryPage {
  filterBySizeM() {
    cy.get('a[href*="size=167"]').first().click()
  }

  verifySizeFilterApplied() {
    cy.get('.filter-current').should('contain', 'M')
  }

  openFirstProduct() {
    cy.get('.product-item').first().click()
  }
}
export default CategoryPage
