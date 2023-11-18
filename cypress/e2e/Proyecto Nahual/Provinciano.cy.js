/// <reference types="cypress" />

      describe('Test de pantalla de Provinciano', () => {
      beforeEach(() => {
      cy.visit('https://nahual.github.io/qc-provinciano/provinciano_4.html');
      });

      it('Titulo de la Aplicacion', () => {
      cy.title().should('eq', "Provinciano")
      })

      it('Descripción de la Aplicacion', () => {
      cy.get('p').should('have.text', "Buscador de datos sobre Provincias de la República Argentina")
      })

      it('Validar Label: Región', () => {
      cy.get(':nth-child(1) > label').should('have.text',"Región")      
      
      })
    
      it('Validar Label: Nombre', () => {
      cy.get(':nth-child(2) > label').should('have.text', "Nombre")
        
      })
      it('Escribir Nombre', () => {  
      cy.get('#input').type('Santa Fe')

      })

      it("Validacion Grilla > Columna: Región", () => {
      cy.contains('Región ⇑').should('have.text', 'Región ⇑')
      })
      it("Validacion Grilla > Columna: Nombre", () => {
        cy.contains('Nombre ⇑').should('have.text', 'Nombre ⇑')
      })
      it("Validacion Grilla > Columna: Capital", () => {
        cy.contains('Capital ⇑').should('have.text', 'Capital ⇑')
      })
      it("Validacion Grilla > Columna: Habitantes", () => {
        cy.contains('Habitantes ⇑').should('have.text', 'Habitantes ⇑')
      })
      it("Validacion Grilla > Columna: Kms2", () => {
        cy.contains('Km2⇑').should('have.text', 'Km2⇑')
      })
      })
      
      

