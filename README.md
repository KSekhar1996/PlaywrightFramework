# PlaywrightFramework

## Setup 🛠️

### Pre-requisites

* Install NodeJS and NPM pakcage manager.
* Code Editor of your choice e.g. Visual Studio Code
  * Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) VS Code extension from Microsoft to make linting work in IDE
* GIT Client (for remote tracking)
* GIT Bash terminal (for Windows)

### Setup from Scratch

* `npm init playwright@latest` to install playwright dependencies
* `npx playwright test` to execute the tests.
* `npx playwright test test.spec.js --project=chromium --headed` to choose browser of your choice and in headed mode while executing test.
* Remove the default specs from `tests` and remove `tests-examples` folder
* Add `.github\workflows` to execute tests in CI/CD pipeline
* Add `.gitignore` to exclude files and folders from GIT
* Add `README.md` to document
* Start with writing tests under `tests` directory.