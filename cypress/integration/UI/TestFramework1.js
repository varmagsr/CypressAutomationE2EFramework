/// <reference types="cypress" />
import HomePage from '../pageObjects/HomePage'


describe('this the 5rd test suite to handel hooks,', function(){

    beforeEach(function(){

        cy.fixture('mydata').then(function(data)
        {
            this.data=data

        })
    })

    it('this wil be the 1st test case in 5th suite for handling Hooks & Fixures ', function(){
        const homePage = new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        homePage.getNameEditBox().type(this.data.name)
        homePage.getEmailEditBox().type(this.data.email)
        homePage.getPasswordEditBox().type(this.data.pwd)
        homePage.getIcecreamCheckBox().check()
        homePage.getGenderEditBox().select(this.data.gender)
        homePage.getEmploymentStatus().check()
        homePage.getShopPage().click()
        //cy.get(':nth-child(8) > .form-control').click().type('12/14/2000')
       
    })   

    it('this wil be the 2nd test case in 5th suite for handling parameters validation ', function(){
        const homePage = new HomePage()
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
       homePage.getNameEditBox().type(this.data.name)
       homePage.getNameReflaction().should('have.value',this.data.name) 
       homePage.getNameEditBox().should('have.attr','minlength','2')
        homePage.getDisabledRadioButton().should('be.disabled')
    })   

    it('this wil be the 2nd test case in 5th suite for handling custom commands', function(){
        cy.visit("https://rahulshettyacademy.com/angularpractice/shop")
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        }) 
    })   

})