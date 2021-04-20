# Introduction

Project using cypress framework to carry out end-to-end tests (end-to-end) for applications.
Currently, it uses JavaScript as a programming language and runs tests on Chrome.


# Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/)(versão ^8)
- [Npm](https://docs.npmjs.com/cli/init/)
- [Java](https://www.java.com/pt_BR/download/)(versão ^8)
- [git](https://git-scm.com/downloads/)

> To check the version of Node.js installed on your computer, run the command `node -v`, you should see something like `v12.16.1`. If you don't have Node.js installed, use the `Ctrl` + key above to download and install it.
> To check the version of the npm manager installed on your computer, run the `npm -v` command, you should see something like `6.13.4`. If you do not have npm installed, use the `Ctrl` key + the link above to download and install it.
> To check the version of Java installed on your computer, run the command `java -version`, you should see something like `java version "1.8.0_241" `. If you do not have java installed, use the `Ctrl` key + the link above to download and install it.
> To check the version of git installed on your computer, run the command `git --version`, you should see something like `git version 2.24.1.windows.2`. If you don't have git installed, use the `Ctrl` key + the link above to download and install it.

# Environment variables

> If you have not seen any of the versions above, you should check the environment variables of the respective versions above.

Windows 10
> In Search, search for and select: System (Control Panel)
> Click the Advanced system settings link.
> Click Environment Variables. In the System Variables section locate the PATH environment variable and select it. Click Edit. If the PATH environment variable does not exist, click New.
> In the Edit System Variable (or New System Variable) window, specify the value of the PATH environment variable. Click on OK. Close all remaining windows by clicking OK.
> Reopen the Command Prompt window and execute the commands listed above.

# Installation

1.  Clone the project to your machine, if you are unaware or familiar with the git access commands ("https://www.freecodecamp.org/news/10-important-git-commands-that-every-developer-should-know/") or download the project and open with Vscode.
2.  Run the following `npm i` command on the console (cmd) or on the VSCode terminal itself to install the design and development dependencies.

# Running the tests

1.  To run the tests through the terminal, execute the command `npm run cypress: open` on the console (cmd) or on the VSCode terminal itself to launch the cypress dashboard.
2.  To run the tests through the browser, execute the command `npx cypress run --browser chrome --no-exit` on the console (cmd) or on the VSCode terminal
3.  To run the tests via a script saved in package.json, execute the command `npm run test:chrome` on the console (cmd) or on the VSCode terminal

# Developed

Test suite developed by Rafael Torres

# References

https://www.cypress.io/
https://www.npmjs.com/
https://git-scm.com/
