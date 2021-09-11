
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />


import 'cypress-iframe'
import HomePage from '../PageObject/HomePage'
import LoginPage from '../PageObject/LoginPage'
import CreateAccountPage from '../PageObject/CreateAccountPage'

describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 

   const homepage=new HomePage()
   const loginpage=new LoginPage()
   const createaccountpage= new CreateAccountPage()

    cy.visit("https://www.way2automation.com/")
    

   cy.wait(2000)
   homepage.getDialogBoxCloseLink().click()
   homepage.getMemberLoginLink().invoke('removeAttr','target').click();


        //create an account  cy.get('.link-below-button')
        createaccountpage.getCreateAnAccountLink().invoke('removeAttr','target').click()
       // cy.get('.link-below-button').click()
       createaccountpage.getFullName().type('BinitaBinita')
       createaccountpage.getEmailAddress().type('BinitaBinita@gmail.com')
       createaccountpage.getPassword().type('Binita@02')
       createaccountpage.getConfirmPassword().type('Binita@02')
       createaccountpage.getFirstCheckBos().check()
       createaccountpage.getSecondCheckBos().check()
       createaccountpage.getSignUpLink().click()


        
        












})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 