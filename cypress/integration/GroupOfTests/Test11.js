/// <reference types="cypress" />

describe('My first test Suite', function()
{
    it('My forst test case', function(){
        //Navigating to grocery shopping site 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        //filtering the products with ca keyword
        cy.get('.search-keyword').type('ca');
        //cy.get('.search-button')
        cy.get('.products').as('productslocator')
        //checking if the number of products display are 4 which are in visible state
        cy.get('.product:visible').should('have.length',4)
        //OR
        //second way to check with parent child order in DOM
        cy.get('@productslocator').find('.product').should('have.length',4)

        //incrementing the quantity of product
        cy.get(':nth-child(3) > .stepper-input > .increment').click();
        //Clicking on the ADD CART button
        cy.get('.products').find('.product').eq(3).contains('ADD TO CART').click().then(function(){
            console.log('RV')
        })
        
        //Alternative way of selecting the requried product by looping each product and clicking on product name that matches with cashewa
        cy.get('.products').find('.product').each(($e1, index, $list) => {

        const testVeg=$e1.find('h4.product-name').text()
        if(testVeg.includes('Cashews')) 
        {
           cy.wrap($e1).find('button').click()
        }
        })
        cy.get('.brand').then(function(logoelement){

            cy.log(logoelement.text())
        })
        //cy.get(':nth-child(2) > .product-action > button').click();

        //Clicking in the cart icon on top right corner
        cy.get('.cart-icon > img').click()
        //clicking on the procced to cart button
        cy.get('.cart-preview > .action-block > button').click()
        //click on the proceed order button
        cy.get(':nth-child(14)').click()
        //Select agree checkbox
        cy.get('.chkAgree').click()

      
    })









})