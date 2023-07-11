import {LoginPage} from "../pages/LoginPage"
import { HomePage } from "../pages/homePage"

let loginPage = new LoginPage()
let homePage = new HomePage()
let userdata
before(() =>{
    cy.fixture('credential').then((data) => {
        userdata = data
    })
})

it("Login calling POM function", function(){
    cy.visit(loginPage.elements.application_URL)
    loginPage.Login(userdata.username, userdata.password)    
})

it("Login using POM", function(){
    cy.visit(loginPage.elements.application_URL)
    cy.get(loginPage.elements.txtUsername).type('Admin')
    cy.get(loginPage.elements.txtPassword).type('admin123')
    cy.get(loginPage.elements.btnLogin).click()
    cy.get(homePage.Elements.bannerTitle).should('be.visible')
})



it("Login Test using Page Object", function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get('.oxd-brand-banner > img').should('be.visible')
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    cy.contains('About').click()
    cy.get('.oxd-grid-2 > :nth-child(5) > .oxd-text').should('contain.text', 'Active Employees:')


})
