describe('Test Case 18: View Category Products', () => {
    it('Should display products by selected category and sub-category', () => {
      
      cy.visit('http://automationexercise.com');
  
      
      cy.get('.left-sidebar')
        .should('be.visible')
        .and('contain', 'Category');
  
      
      cy.contains('.panel-title', 'Women').click();
  
      
      cy.contains('.panel-body li a', 'Dress').click();
  
      
      cy.get('.features_items')
        .should('contain.text', 'Women - Dress Products');
  
      
      cy.contains('.panel-title', 'Men').click();
      cy.contains('.panel-body li a', 'Tshirts').click();
  
      
      cy.get('.features_items')
        .should('contain.text', 'Men - Tshirts Products');
    });
  });
  