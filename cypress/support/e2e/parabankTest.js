describe('My First Test', () => {
   
    it('Visit Web ', () => {
        cy.visit(Cypress.config('baseUrl'))
    })

    it('Do Forgot login info Failed', () =>{
        const button =  cy.contains('Forgot login info?');
        button.click(); 
        
        cy.contains('Please fill out the following information in order to validate your account.');
        
        const firstName = cy.get("input[name='firstName']");  
        firstName.type("dani1");

        const lastName = cy.get("input[name='lastName']");  
        lastName.type("wira1");

        const street = cy.get("input[name='address.street']");  
        street.type("langkapura1");

        const city = cy.get("input[name='address.city']");  
        city.type("metro");

        const state = cy.get("input[name='address.state']");  
        state.type("indonesia");

        const zipCode = cy.get("input[name='address.zipCode']");  
        zipCode.type("35156");

        const ssn = cy.get("input[name='ssn']");  
        ssn.type("35156");

        const btnFindLogin =  cy.contains('Find My Login Info');
        btnFindLogin.click();  

        cy.contains('The customer information provided could not be found.');
    })
    
    it('Do Forgot login info Success', () =>{
        const button =  cy.contains('Forgot login info?');
        button.click(); 
        
        cy.contains('Please fill out the following information in order to validate your account.');
        
        const firstName = cy.get("input[name='firstName']");  
        firstName.type("dani");

        const lastName = cy.get("input[name='lastName']");  
        lastName.type("wira");

        const street = cy.get("input[name='address.street']");  
        street.type("langkapura");

        const city = cy.get("input[name='address.city']");  
        city.type("bandarlampung");

        const state = cy.get("input[name='address.state']");  
        state.type("indonesia");

        const zipCode = cy.get("input[name='address.zipCode']");  
        zipCode.type("35155");

        const ssn = cy.get("input[name='ssn']");  
        ssn.type("35155");

        const btnFindLogin =  cy.contains('Find My Login Info');
        btnFindLogin.click();  

        cy.contains('Your login information was located successfully. You are now logged in.');
    })
   
    it('Do Logout', () =>{
        const button =  cy.contains('Log Out');
        button.click();  
    })

    it('Do Login with null value', () =>{
        const button =  cy.contains('Log In');
        button.click();  
        cy.contains("Please enter a username and password.");
    })

    it('Do Login with Wrong value', () =>{ 
        cy.get(':nth-child(2) > .input').type('daniwira')
        cy.get(':nth-child(4) > .input').type('juh87agi')
        cy.get(':nth-child(5) > .button').click()

        cy.contains("The username and password could not be verified.");
    })

    it('Do Login with Correct value', () =>{
        const username = cy.get("input[name='username']");  
        username.type("daniwira45");

        const password = cy.get("input[name='password']");  
        password.type("viking1993");

        const button =  cy.contains('Log In');
        button.click();  

        cy.contains("Welcome");
        cy.contains('Accounts Overview')
        cy.get("#accountTable")
    })
  })