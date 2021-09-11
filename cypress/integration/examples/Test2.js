
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />


import 'cypress-iframe'
import HomePage from '../PageObject/HomePage'
import LoginPage from '../PageObject/LoginPage'
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 


    const homepage=new HomePage()
    const loginpage=new LoginPage()

    cy.visit("https://www.way2automation.com/")
    cy.clearCookies()
    
   
   homepage.getDialogBoxCloseLink().click()
   homepage.getMemberLoginLink().invoke('removeAttr','target').click();
   loginpage.getEmailAddress().type('BinitaRathour02@gmail.com')
   loginpage.getPassword().type('binitarathour02')
   cy.clearCookies()
   loginpage.getLoginInLink().click()







/*
      cy.get('div.dialog-close-button').click()
    // cy.get('li[id="menu-item-25909"] span[class="menu-text"]').invoke('attr', 'target', ' _self').click()
     cy.get('#menu-item-25909 a').invoke('removeAttr','target').click()
       cy.get('#user_email').type('BinitaRathour02@gmail.com')
        cy.get('#user_password').type('BinitaRathour')

        cy.get('input[type="submit"]').click()



        //create an account  cy.get('.link-below-button')


        cy.get('#user_name').type('BinitaBinita')
        cy.get('#user_email').type('BinitaBinita@gmail.com')
        cy.get('#user_password').type('Binita@02')
        cy.get('#user_password_confirmation').type('Binita@02')
        cy.get('#user_unsubscribe_from_marketing_emails').check()
        cy.get('#user_agreed_to_terms').check()
        cy.get('input[type="submit"]').click()


        
        */












})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 