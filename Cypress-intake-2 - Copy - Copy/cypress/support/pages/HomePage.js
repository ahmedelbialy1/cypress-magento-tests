class HomePage {
  visit() {
    cy.visit('https://magento.softwaretestingboard.com/')
  }

  getTitle() {
    return cy.title()
  }

  searchProduct(product) {
    cy.get('#search').type(`${product}{enter}`)
  }

  navigateToWomen() {
    cy.get('a[href="https://magento.softwaretestingboard.com/women.html"]').click()
  }

  navigateToMen() {
    cy.get('a[href="https://magento.softwaretestingboard.com/men.html"]').click()
  }

  navigateToSale() {
    cy.get('a[href="https://magento.softwaretestingboard.com/sale.html"]').click()
  }
}
export default HomePage
