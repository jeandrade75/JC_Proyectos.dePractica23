/// <reference types="cypress" />

describe('Conjunto de pruebas',() => {

            it('Validar pagina de inicio', () => {
                cy.visit('zero.webappsecurity.com/')
                cy.get('.active > img').should('be.visible') // Este sirve para validar si el elemento esta visible
                cy.get('.active > .custom > h4').contains('Online Banking')

            })

describe('Pantalla Zero bank', () => {
            it('Loguearse', () => {
                cy.visit('zero.webappsecurity.com/')
                cy.get('#signin_button').click()
                cy.get('#user_login').type('username')
                cy.get('#user_password').type('password')
                cy.get('#user_remember_me').click()
                cy.get('.btn').click()
                cy.get('#transfer_funds_tab > a').click()
                cy.get('#tf_fromAccountId').select('1')
                cy.get('#tf_toAccountId').select('5')
                cy.get('#tf_amount').type('300')
                cy.get('#tf_description').type('Transferencia de prueba')
                cy.get('#btn_submit').click()
                cy.get('#btn_submit').click()
                cy.get('.alert').contains('You successfully submitted your transaction.')


            })
            })
            })
            
            

