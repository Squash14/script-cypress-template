import Json from '../../configurations/development.json'

class Login {

    precarregamentoUrl(){

        cy.request(Json.baseUrl).should(
           (response) => {
           expect(response.status).to.eq(200)},)
    }
    
    urlBaseTeste(){
        cy.visit(Json.baseUrl);
    }
    
    visualizarLinkEsqueciMinhaSenha(){
        cy.get('#login-form > a', {timeout: 60000})
        .should('be.visible', {timeout: 60000})
    }

    preencherLoginDadosValidos(){
        cy.get('#login-form > div:nth-child(1) > input', {timeout: 60000})
        .invoke('show')
        .type(Json.email)

        cy.get('#login-form > div:nth-child(2) > input', {timeout: 60000})
        .invoke('show')
        .type(Json.pass)

        cy.get('#login-button', {timeout: 60000})
        .invoke('show')
        .click()
    }

    espera(){
        cy.wait(5000)
    }

    textoLinkEsqueciMinhaSenha(){
        cy.contains('Esqueceu sua senha?', {timeout: 60000})
        .invoke('show')
        .should('be.visible')
    }

}

export default new Login()