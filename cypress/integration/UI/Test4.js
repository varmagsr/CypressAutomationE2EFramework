/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'


describe('this the 4rd test suite', function(){

    it('this wil be the 1st test case in 4th suite for handling CHILD window ', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').then(function(e1) 
        {
            const url=e1.prop('href')
            cy.log(url)
            cy.visit(url)
        })

    })   

    it('this wil be the 2nd test case in 4th suite for handling FRAMES ', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        //cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)

    })   




}) 