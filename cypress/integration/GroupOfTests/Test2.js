/// <reference types="cypress" />


describe('this the second test suite', function(){

    it('this wil be the 1st test case in 2nd suite for checkbox testing', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])

    })

    it('this is 2nd test case in 2nd suite for static dropdowns', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#dropdown-class-example').select('Option2').should('have.value','option2')
        
    })

    it('This is the 3rd test case for handling dynamic dropdowns', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $list) =>{
            if($e1.text()==="India")
            {
               cy.wrap($e1).click()
            }
        })
        cy.get('#autocomplete').should('have.value','India')

    })

    it('This is the 4th test case for handling visible & Invisible elements', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    it.only('This is the 5th test case for handling Radio Buttons', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[for="radio3"] > .radioButton').check().should('be.checked')

    })


})