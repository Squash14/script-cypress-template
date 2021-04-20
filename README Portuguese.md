# Introdução

Projeto utilizando framework cypress para realizar testes de ponta a ponta (end-to-end) para aplicativos.
Atualmente, utiliza JavaScript como linguagem de programação e executa os testes no Chrome.


# Pré-requisitos

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)(versão ^8)
- [Npm](https://docs.npmjs.com/cli/init/)
- [Java](https://www.java.com/pt_BR/download/)(versão ^8)
- [git](https://git-scm.com/downloads/)

> Para verificar a versão do Node.js instalada em seu computador, execute o comando `node -v`, você dever ver algo como `v12.16.1`. Caso não tenha o Node.js instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.
> Para verificar a versão do gerenciador npm instalada em seu computador, execute o comando `npm -v`, você dever ver algo como `6.13.4`. Caso não tenha o npm instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.
> Para verificar a versão do Java instalada em seu computador, execute o comando `java -version`, você dever ver algo como `java version "1.8.0_241"`. Caso não tenha o java instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.
> Para verificar a versão do git instalada em seu computador, execute o comando `git --version`, você dever ver algo como `git version 2.24.1.windows.2`. Caso não tenha o git instalado, utilize a tecla `Ctrl` + o link acima para baixá-lo e instalá-lo.

# Variaveis de ambientes

> Caso não tenha visualizado nenhuma das versões acima, deve verificar as variaveis de ambientes das respectivas versões acima.

Windows 10
> Em Pesquisar, procure e selecione: Sistema (Painel de Controle)
> Clique no link Configurações avançadas do sistema.
> Clique em Variáveis de Ambiente. Na seção Variáveis do Sistema localize a variável de ambiente PATH e selecione-a. Clique em Editar. Se a variável de ambiente PATH não existir, clique em Novo.
> Na janela Editar Variável de Sistema (ou Nova Variável de Sistema), especifique o valor da variável de ambiente PATH. Clique em OK. Feche todas as janelas restantes clicando em OK.
> Reabra a janela Prompt de comando e execute os comandos acima listados.

# Instalação

1.  Clone o projeto para sua máquina, caso não tenha conhecimento ou esteja familiarizado com os comandos git acesse ("https://blog.geekhunter.com.br/comandos-git-mais-utilizados/") ou faça o download do projeto e abra com o Vscode.
2.  Execute o seguinte comando `npm i` no console (cmd) ou no próprio terminal do VSCode para instalar as dependências do projeto e de desenvolvimento.

# Executando os testes

1.  Para executar os testes através do terminal, execute o comando `npm run cypress: open` no console (cmd) ou no próprio terminal VSCode para iniciar o painel do cypress.
2.  Para executar os testes no navegador, execute o comando `npx cypress run --browser chrome --no-exit` no console (cmd) ou no terminal VSCode.
3.  Para executar os testes por meio de um script salvo em package.json, execute o comando `npm run test: chrome` no console (cmd) ou no terminal VSCode.

# Desenvolvida

Suíte de testes desenvolvida por Rafael Torres

# Referências


https://www.cypress.io/
https://www.npmjs.com/
https://git-scm.com/
