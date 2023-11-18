/// <reference types="cypress" />

describe('Home de www.geekqa.net', () => {

    beforeEach(() => {
        cy.visit('https://geekqa.net/')

    })

    it('should have a title', () => {
        cy.title().should('include', 'Geek QA – Aprende Software Testing desde cero!')
        //cy.xpath('//*[@id="page_header"]/div/section/div/header/nav/ul/li[1]/a').click()
    })

    //Verificar cuantos elementos iguales hay
    it('Hay 01 elemento con el boton ver curso', () => {
        cy.get('#menu-1-0172a80 > .menu-item-25 > .elementor-item').click()
        cy.get('.elementor-element-28895b9 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button > .elementor-button-content-wrapper > .elementor-button-text').should('have.length', 1)

        //})
        //Verificar la clase de un web element
        //it('Que el campo Nombre del formulario posee clase XXX', () => {
        //cy.get('#form-field-email').should('have.class', 'elementor-field elementor-size-sm  elementor-field-textual')

    })
    // Para validar si tiene texto dentro de un elemento    
    it('Hay un link llamado Blog en la barra de navegacion', () => {
        cy.get('#menu-1-0172a80 > .menu-item-23 > .elementor-item').should('have.text', 'Blog')
    }) // Para validar si tiene un valor se usa 'have.value', '{valor}'

    // Para verificar que algo se ve > que esta en pantalla    
    it('Existe un boton de Suscribete aqui', () => {
        cy.get('.elementor-field-type-submit > .elementor-button > :nth-child(1) > .elementor-button-text').should('be.visible')
    })

})