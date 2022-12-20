/// <reference types="cypress"/>
import locators from '..\support\locators'

describe('To register on demo site', function () {

        it.only('to register new user', function () {
            cy.visit('https://alura-fotos.herokuapp.com/#/home')
            cy.contains('Login').should('be.visible')



        })
})

