class ReisterPage{



    getCreateAnAccountLink()
    {
        return cy.get('.box-footer > a')
    }

   
    getFullName()
    {
        return cy.get('#user_name')
    }

    getEmailAddress()
    {
        return  cy.get('#user_email')
    }

    getPassword()
    {
        return  cy.get('#user_password')

    }


    getConfirmPassword()
    {

        return cy.get('#user_password_confirmation')
    }


    getFirstCheckBos()
    {
        return cy.get('#user_unsubscribe_from_marketing_emails')

    }

    getSecondCheckBos()
    {

        return cy.get('#user_agreed_to_terms')
    }


    getSignUpLink()
    {

        return  cy.get('input[type="submit"]')
    }

        

}



export default ReisterPage;