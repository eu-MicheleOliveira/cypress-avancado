/// <reference types="cypress"/>
import locators from '../../support/locators'
describe('Log in', function () {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
        cy.contains('Login').should('be.visible')
    })
    it('Log in successfully', function () {
        cy.get(':nth-child(1) > .form-control').type('michele')
        cy.get(':nth-child(2) > .form-control').type('senha123')
        cy.get('.btn').click({ force: true })
        cy.get('.navbar-brand').contains(' ALURAPIC ')
    })

    it('Log out login successfully', () => {
        cy.get('.navbar-text > a').click()
        cy.get('.text-center').should('text', 'Login')
    });
})
