import { HomePage } from "./homePage"

let homePage = new HomePage()

export class LoginPage{
    elements = {
        application_URL:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    txtUsername: ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
    txtPassword: ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',
    btnLogin: '.oxd-button'
    }
    Login(username, password){
        cy.get(this.elements.txtUsername).type(username)
        cy.get(this.elements.txtPassword).type(password)
        cy.get(this.elements.btnLogin).click()
        cy.get(homePage.Elements.bannerTitle).should('be.visible')
    }
} 