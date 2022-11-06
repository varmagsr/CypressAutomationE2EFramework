beforeEach(function(){

    cy.fixture('mydata').then(function(data)
    {
        this.data=data

    })
})