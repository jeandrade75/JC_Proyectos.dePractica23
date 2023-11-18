/// <reference types="cypress"/>

describe('List of contacts',function () { 
before(() => {
    
    cy.visit('https://nahual.github.io/qc-contactos/contactos.html');
    cy.fixture('ContactsData').then(function(data){
        this.data = data

    });
}); 

it ('Adding contacts', function (){

this.data.forEach(function(element){
    cy.get('[type="button"]').click();
    cy.get('#contact-name').type(element.name);
    cy.get('#contact-mail]').type(element.email);
    cy.contains('Guardar').click();
    })
})

});