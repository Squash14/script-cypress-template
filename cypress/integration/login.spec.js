import login from '../support/pages/login'


describe('Login site CWI', () => {

    it('Visualizar opção de recuperar senha esquecida', () => {

        login.precarregamentoUrl()

        login.urlBaseTeste()

        login.textoLinkEsqueciMinhaSenha()

        login.visualizarLinkEsqueciMinhaSenha()
    })

    it('Realizar login com dados inválidos', () => {

        login.precarregamentoUrl()

        login.urlBaseTeste()

        login.preencherLoginDadosValidos()
    })

})