/// <reference types="cypress"/>
import locators from '../../support/locators'

describe('To register on demo site', function () {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
    })
    it.only('to register new user', function () {
        cy.contains('Login').should('be.visible')
        cy.get(locators.REGISTER.xp_userName)

    })
})

