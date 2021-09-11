class HomePage{

        getMemberLoginLink()
        {
            return cy.get('#menu-item-25909 a')
        }
       
       getDialogBoxCloseLink()
       {
        return cy.get('.eicon-close')
       }





}



export default HomePage;