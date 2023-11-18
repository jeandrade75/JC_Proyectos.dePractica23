/// <reference types="cypress"/>

describe('Test de pantalla de Contactos', () => {
    before(() => {
        cy.visit('https://nahual.github.io/qc-contactos/contactos.html?v=4');

    });

    beforeEach(function () {
        cy.log('Before Each')
    })

    it("Agregar Contacto", () => {
        //cy.get('#contacts - table > tbody').should('have.text', 'No hay contactos guardados') // para validar mensaje inicial
        cy.get(':nth-child(2) > .btn').click()
        cy.get('#contact-name').type('Juan Carlos')
        cy.get('#contact-mail').type('juan@gmail.com')
        cy.get('.btn-primary').click()
        cy.get(':nth-child(2) > .btn').click()
        cy.get(':nth-child(2) > .btn').click()
        cy.get('#contact-name').type('Maria Lopez')
        cy.get('#contact-mail').type('maria@gmail.com')
        cy.get('.btn-primary').click()
        cy.get(':nth-child(2) > .btn').click()
        cy.get('#contact-name').type('Pedro Perez')
        cy.get('#contact-mail').type('pedro@gmail.com')
        cy.get('.btn-primary').click()
        cy.contains('Juan Carlos').should('have.text', "Juan Carlos")
        cy.contains('juan@gmail.com').should('have.text', "juan@gmail.com")
        cy.get(':nth-child(1) > :nth-child(4) > .icon-pencil').check
        cy.get(':nth-child(1) > :nth-child(4) > .icon-remove').check
        cy.get('th[name="contact-name"] > [order="desc"]').check
        cy.get('.active_sort').check
        //cy.visit('https://nahual.github.io/qc-contactos/contactos.html?v=4')
        //cy.get('.empty').check
        //cy.get(':nth-child(2) > .btn').check
        

        it("Ordenar por Nombre/Mail ascendente y descendente", () => {
            cy.get('th[name="contact-name"] > [order="desc"]').click()
            cy.get('.active_sort').click()
            cy.get('th[name="contact-mail"] > [order="asc"]').click()
            cy.get('th[name="contact-mail"] > [order="desc"]').click()
            //cy.get(':nth-child(2) > .btn').should('be.visible')
        })
        it("Ordenar por Nombre/Mail ascendente y descendente", () => {
            cy.get(':nth-child(2) > .btn').should('be.visible')
        })

    })

    afterEach(function () {
        cy.log('after Each')
    })

    after(function () {
        cy.log('After')
    })
})