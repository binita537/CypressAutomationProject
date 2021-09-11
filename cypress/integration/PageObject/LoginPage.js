class LoginPage{

    getLoginLink()
    {
       return cy.get('#menu-item-25909 a').invoke('removeAttr','target')
    }
   

    getEmailAddress()
    {
       return cy.get('#user_email')
    }

    getPassword()
    {
        return cy.get('#user_password')
    }

    getLoginInLink()
    {
        return cy.get('input[type="submit"]')
    }

    getForgetPassword()
    {
        return cy.get('a.link-below-button')
    }


}



export default LoginPage;