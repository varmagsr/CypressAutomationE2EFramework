/// <reference types="cypress" />


describe('this the 3rd test suite', function(){

    it('this wil be the 1st test case in 3rd suite for handling OK Alert window ', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //window:alert
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

    })    

    it('this wil be the 2nd test case in 3rd suite for handling CONFIRM Alert window ', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        cy.on('window:confirm', () => false); 
        //cy.get('#result').contains('You clicked: Cancel')
        //window:confirm
        cy.on('window:confirm',(str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

    })  

    it('this wil be the 3rd test case in 3rd suite for handling newtabs ', function(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('not.include','Automation')
        cy.go('back')
        cy.url().should('include','Automation')

    }) 

    it.only('this wil be the 4th test case in 3rd suite for handling web Tables ', function(){
       //Check boxes
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
 
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
 
            const text=$e1.text()
            if(text.includes("Python"))
            {
 
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const priceText=   price.text()
                    expect(priceText).to.equal('25')
                })
            }
 
        })

    }) 

    it.only('this wil be the 5th test case in 3rd suite for handling MouseHover ', function()
    {
        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true})
        cy.url().should('include','top')
                 
 
     }) 

})