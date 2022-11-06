/// <reference types="cypress" />
import HomePage from '../../../support/pageObjects/HomePage'
import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
const homePage = new HomePage()

Given('I Open Ecommerce Page',function(){
    cy.visit(Cypress.env('QAUrl'))
   
})
When('I add items to cart', function(){
  
    homePage.getShopPage().click()
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



When('I fill the form details', function(){
    homePage.getNameEditBox().type(this.data.name)
    homePage.getEmailEditBox().type(this.data.email)
    homePage.getPasswordEditBox().type(this.data.pwd)
    homePage.getIcecreamCheckBox().check()
    homePage.getGenderEditBox().select(this.data.gender)
    homePage.getEmploymentStatus().check()

}) 
Then('Validate the form behaviour', function(){
   
    homePage.getNameReflaction().should('have.value',this.data.name) 
    homePage.getNameEditBox().should('have.attr','minlength','2')

}) 
And('select the shop page', function(){

    homePage.getShopPage().click()

}) 