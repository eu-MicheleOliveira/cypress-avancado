/// <reference types="cypress"/>
import locators from '../../support/locators'
describe('To register on demo site', function () {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
        cy.contains('Login').should('be.visible')
    })
    it('to register new user', function () {
        cy.get('p > a').click()
        cy.get(':nth-child(1) > .form-control').type('lalala@gmail.com')
        cy.get(':nth-child(2) > .form-control').type('Teste QA')
        cy.get(':nth-child(3) > .form-control').type('testeqa')
        cy.get(':nth-child(4) > .form-control').type('password')
        cy.get('.btn').click()
        cy.wait(154545)
    })
})

