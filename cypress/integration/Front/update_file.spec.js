/// <reference types="cypress"/>
import locators from '../../support/locators'
describe('Upload file', function () {
    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home')
        cy.get(':nth-child(1) > .form-control').type('michele')
        cy.get(':nth-child(2) > .form-control').type('senha123')
        cy.get('.btn').click({ force: true })
        cy.get('.navbar-brand').contains(' ALURAPIC ')
    })

    it('Upload picture', () => {
        cy.get('.navbar-brand > .fa').click()
        cy.get('li > a').click()
        cy.get('.menu-bar > .fa').click()
        cy.get('.text-center > .form-group').click()
    })
})