describe('To register on demo site', function () {

    BeforeEach(() => {
        cy.visit('https://demo.automationtesting.in')
    }),

        it('to register new user', function () {
            cy.visit('https://demo.automationtesting.in/Register.html')
        })
})

