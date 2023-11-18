/// <reference types="cypress" />

describe('Test de pantalla de Celfar', () => {
  it('Titulo de la Aplicacion', () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=1')
    cy.get('h1').should('have.text', "CelFar")
   })

  it('Descripcion de la Aplicacion', () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=1')
    cy.get('#description').should('have.text', "Conbersor de grados Celcius y Fahrenheit")
  })

  it('Link de Celcius', () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=1')
    cy.get('[href="http://es.wikipedia.org/iki/Grado_Celsius"]').should("exist")
  })

  it('Link de Fahrenheit', () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=1')
    cy.get('[href="http://es.wikipedia.org/wiki/Grado_Fahrenheit"]').should("exist")
  })

  it("Validacion de convertir 5 grados celcius", () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=1')
    cy.get('#input').type(5)
    cy.get('.button').click()
    cy.get('#output').should("have.text", 41)
  })
  
  it("Validacion cantidad maxima de caracteres", () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=1')
    cy.get('#input').type(515151)
    cy.get('.button').click()
    cy.get('#output').should("have.text", 927303.8)
  })

  it("Validacion mensaje de error con mas de 6 caracteres", () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=1')
    cy.get('#input').type(5151515)
    cy.get('.button').click()
    cy.get('#output').should("have.text", 'ERROR: invalid input')
  })
  
  it("Validacion de campo: Texto > vacio", () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=1')
    //cy.get('#input').type()
    cy.get('.button').click()
    cy.get('#output').should('have.text', "El valor ingresado no es un número (recuerde que los decimales deben expresarse con '.' y no con ',')")
  })

  it('Boton Convertir', () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=1')
    cy.get('.button').should("exist")
   })
   it('Campo: Pendiente de calculo', () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=1')
    cy.get('#output').should('have.text', "Pendiente de calculo...")
   })

   it("Validacion Cuando se modifica el valor el campo numérico", () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=1')
    cy.get('#input').type(515151)
    cy.get('.button').click()
    cy.get('#output').should("have.text", 927303.8)
    cy.get('#input').clear()
    //cy.get('[type="text"]').clear()
    cy.get('#output').should('have.text', "Pendiente de calculo...")
  })

  it("Validacion mensaje Cuando El valor ingresado es muy largo", () => {
    cy.visit('https://nahual.github.io/qc-celfar/?v=2')
    cy.get('#input').type(51515155)
    cy.get('.button').click()
    cy.get('#output').should("have.text", 'El valor ingresado es muy largo')
  })


})

