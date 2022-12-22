/// <reference types="cypress"/>
import locators from '../../support/locators'

describe('Log in', function () {
    it('Log in', function () {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
        cy.contains('Login').should('be.visible')
        cy.get(locators.REGISTER.user_name).click()

    })

    it('Log out', () => {

    });
})
