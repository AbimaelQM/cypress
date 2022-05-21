Cypress.Commands.add("createOng",()=>{
    cy.request({
        method: "POST",
        url: "http://localhost:3333/ongs",
        body:{
          name: "nodeDogs",
          email: "dogsnode@gmail.com",
          whatsapp: "68 999999999",
          city: "Rio branco",
          uf: "AC"
        }
      }).then( response => {
        expect(response.body.id).is.not.null
        cy.log(response.body.id)
  
        Cypress.env('createOngId', response.body.id)
      })
})