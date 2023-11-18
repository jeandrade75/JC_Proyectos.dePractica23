/// <reference types="cypress"/>

describe('List of contacts',function () { 
before(() => {
    cy.visit('https://nahual.github.io/qc-contactos/contactos.html?v=4');
});   

//it("Validacion del titulo Contactos v4", () => {
    //cy.contains('Contactos v4').should('have.text', 'Contactos v4')
    //cy.get('tr > :nth-child(3)').should('have.text', 'Acciones')
    //cy.get('th[name="contact-name"]').should('have.text ', 'Nombre⇑⇓')
    //cy.get('th[name="contact-mail"]').should('have.text', 'Mail⇑⇓')
   
//})

/*it("Validacion Grilla > Columna: Nombre", () => {
    cy.contains('Nombre⇑⇓ ').should('have.text ', "Nombre⇑⇓ ")
    cy.get('th[name="contact-name"]').should('have.text ', 'Nombre')
    
})
it("Validacion Grilla > Columna: Mail", () => {
    cy.contains('Mail⇑⇓').should('have.text', 'Mail⇑⇓')
})*/
//it("Validacion Grilla > Columna: Acciones", () => {
    //cy.contains('Acciones').should('have.text', 'Acciones')
    //cy.get('tr > :nth-child(3)').should('have.text', 'Acciones')


/*beforeEach(function () {
    cy.log('Before Each')
})*/

/*it("Validacion del titulo Contactos v4", () => {
    cy.contains('Contactos v4').should('have.text', 'Contactos v4')
    
})

it("Validacion Grilla > Columna: Nombre", () => {
    cy.contains('Nombre⇑⇓').should('have.text', 'Nombre⇑⇓')
    //cy.get('th[name="Nombre"]').should('have.text', 'Nombre')
})
it("Validacion Grilla > Columna: Mail", () => {
    cy.contains('Mail⇑⇓').should('have.text', 'Mail⇑⇓')
})
it("Validacion Grilla > Columna: Acciones", () => {
    cy.contains('Acciones').should('have.text', 'Acciones')
})*/

/*afterEach(function () {
    cy.log('after Each')
})*/

beforeEach(function () {
     cy.log('Before Each')
})

it("Agregar Contacto", () => {
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

it("Ordenar por Nombre des", () => {
    cy.get('th[name="contact-name"] > [order="desc"]').click()
})    

it("Ordenar por Nombre asc", () => {
    cy.get('.active_sort').click()
})

})

//it("Validar Nombre del contacto", () => {
  //cy.contains('Juan Carlos').should('have.text', "Juan Carlos")
  //cy.contains('juan@gmail.com').should('have.text', "juan@gmail.com")

//})

afterEach(function () {
    cy.log('after Each')
})

after(function () {
    cy.log('After')
})
})




