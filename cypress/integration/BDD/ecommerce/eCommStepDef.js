/// <reference types="cypress" />
import HomePage from '../../../support/pageObjects/HomePage'
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
const homePage = new HomePage()

Given('I Open Ecommerce Page',function(){
    cy.visit(Cypress.env('QAUrl'))
    homePage.getShopPage().click()
})
When('I add items to cart', function(){
  

    this.data.productName.forEach(function(element){
       cy.selectProduct(element)
    }) 
})
Then('select the country submit and verify Thankyou msg', function(){

    cy.visit(Cypress.env('QAUrl')+"/shop") 
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        }) 
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        cy.contains('600000')

})