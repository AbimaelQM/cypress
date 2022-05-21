/// <reference types="cypress" />



describe('example to-do app', () => {
  it("Cadastro", () => {
    cy.visit('http://localhost:3000')
    
    // cy.get('[type="text"]').type("admin")
    // cy.get('[type="password"]').type("admin")
    // cy.get('[type="submit"]').click()


    cy.get('.back-link').click()

    // cy.get('.back-link').click()

    cy.get('[data-cy="name"]').type("salve caes")
    cy.get('[data-cy="email"]').type("jota@gmail.com")
    cy.get('[data-cy="whatsapp"]').type("68999999999")
    cy.get('[data-cy="city"]').type("Brasileia")
    cy.get('[data-cy="uf"]').type("AC")

    cy.route('POST','**/ongs' ).as('postOng')//cria uma "variavel" que salva os dados do metodo passado

    cy.get('[data-cy="submit"]').click()

    cy.wait('@postOng').then((xhr) => {
      expect(xhr.status).be.equal(200)//verifica o status
      expect(xhr.response.body).has.property("id") //verifica a propriedade de id
      expect(xhr.response.body.id).is.not.null // verifica se o id nao é null
    })

  })

  it('login no sistema', ()=>{


    cy.visit('http://localhost:3000')
    cy.get('input').type(Cypress.env('createOngId'))
    cy.get('.button').click()
  })
//createOngId
  // it("Criar Atendimento", () =>{
  //   cy.get(':nth-child(1) > a').click()
  //   cy.get('#comandos > .botao').click()

  // })
  
  // it("Fazer Logout", () =>{
  //   cy.get('.botao').click()

  // })
    
})
  
