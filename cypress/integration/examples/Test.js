
/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />


import 'cypress-iframe'
describe('My Second Test Suite', function() 
{
 
it('My FirstTest case',function() {
 


    //cy.visit("https://www.way2automation.com/")
    

   // cy.wait(2000)
      //  cy.get('div.dialog-close-button').click()
      //  cy.get('li[id="menu-item-25909"] span[class="menu-text"]').invoke('attr', 'target', ' _self').click()
       // cy.get('li[id="menu-item-25909"] span[class="menu-text"]').invoke('removeAttr','target').click()
     //   cy.get('#user_email').type('BinitaRathour02@gmail.com')
       // cy.get('#user_password').type('BinitaRathour')




       cy.visit('https://testproject.io/')
       cy.get('#cc-button').click()
       cy.get('input[type="email"]').type('BinitaRathour02@gmail.com')
    
   cy.wait(4000)

       cy.frameLoaded('.intercom-borderless-frame')
cy.iframe().find('div[aria-label="Dismiss"]').eq(0).click()




       cy.frameLoaded('.aut-iframe')
       cy.iframe().find('button[class="popup-close"]').eq(0).click()

       cy.get('input[type="submit"]').click()
       cy.get('#first-name').type('BinitaRathour')
       cy.get('#last-name').type('BinitaRathour')
       cy.get('#password').type('BinitaRathour')
       cy.get('.tp-checkbox-input-view').check()


   
   /*
      cy.get('#menu-item-901 a').invoke('removeAttr','target').click()
       
       
      cy.get('#username').type('BinitaRathour02@gmail.com')
      cy.get('#password').type('BinitaRathour') 


      cy.get('#tp-sign-in').click()
      */
     






})
 
 
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 