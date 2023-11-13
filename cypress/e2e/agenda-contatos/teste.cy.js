/// <reference types="cypress" />

describe('Testes para a agenda de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    // Inclusão
    it('Deve incluir um novo contato', () => {
        cy.get('input[placeholder="Nome"]').type('Claudio Maesi')
        cy.get('input[placeholder="E-mail"]').type('claudio@email.com.br')
        cy.get('input[placeholder="Telefone"]').type('(19) 12345-1234')
        cy.get('.adicionar').click()
        cy.get('.sc-beqWaB').should('have.length', 4)        
    })    

    // Alteração
    it('Deve editar o telefone do novo contato incluído', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[placeholder="Telefone"]').clear()
        cy.get('input[placeholder="Telefone"]').type('(19) 54321-4321')
        cy.get('.alterar').click()       
    })

    // Remoção
    it('Deve remover o novo contato incluído', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('.sc-beqWaB').should('have.length', 3) 
    })
})
