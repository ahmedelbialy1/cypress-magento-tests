


import HomePage from '../support/pages/HomePage'
import CategoryPage from '../support/pages/CategoryPage'
import ProductPage from '../support/pages/ProductPage'
import CartPage from '../support/pages/CartPage'
import NewsletterPage from '../support/pages/NewsletterPage'

const home = new HomePage()
const category = new CategoryPage()
const product = new ProductPage()
const cart = new CartPage()
const newsletter = new NewsletterPage()

describe('Magento Tests with Page Object Model', () => {

  beforeEach(() => {
    home.visit()
  })

  it('Test 1: Verify homepage title', () => {
    home.getTitle().should('include', 'Home Page')
  })

  it('Test 2: Navigate to Women category', () => {
    home.navigateToWomen()
    cy.url().should('include', '/women')
  })

  it('Test 3: Search for jackets', () => {
    home.searchProduct('jacket')
    cy.url().should('include', 'jacket')
    cy.get('.product-item').should('exist')
  })

  // it('Test 4: Filter by size M', () => {
  //   category.filterBySizeM()
  //   category.verifySizeFilterApplied()
  // })

  it('Test 5: Open a product detail page', () => {
    category.openFirstProduct()
    product.verifyProductPage()
  })

  it('Test 6: Add a product to cart', () => {
    category.openFirstProduct()
    product.selectSizeM()
    product.selectColorBlue()
    product.addToCart()
    product.verifyAddToCartSuccess()
  })

  // it('Test 7: View cart and verify product', () => {
  //   cart.openMiniCart()
  //   cart.verifyMiniCart()
  // })

  it('Test 8: Navigate to Men category', () => {
    home.navigateToMen()
    cy.url().should('include', '/men')
  })

  it('Test 9: Navigate to Sale page', () => {
    home.navigateToSale()
    cy.url().should('include', '/sale')
  })

  // it('Test 10: Subscribe to newsletter', () => {
  //   newsletter.subscribeWithRandomEmail()
  //   newsletter.verifySubscription()
  // })

})
