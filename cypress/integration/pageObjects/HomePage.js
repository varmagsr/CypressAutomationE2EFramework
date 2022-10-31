class HomePage
{
getNameEditBox()
{
    return cy.get(':nth-child(1) > .form-control')
}
getEmailEditBox()
{
    return cy.get(':nth-child(2) > .form-control')
}
getPasswordEditBox()
{
    return cy.get('#exampleInputPassword1')
}
getIcecreamCheckBox()
{
    return  cy.get('#exampleCheck1')
}
getGenderEditBox()
{
    return cy.get('#exampleFormControlSelect1')
}
getEmploymentStatus()
{
    return cy.get('#inlineRadio2')
}
getDisabledRadioButton()
{
    return cy.get('#inlineRadio3')
}
getShopPage()
{
    return cy.get(':nth-child(2) > .nav-link')
}
getNameReflaction()
{
    return  cy.get(':nth-child(4) > .ng-untouched')
}

}
export default HomePage;