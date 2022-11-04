const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tj562t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: ['cypress/integration/UI/*.js','cypress/integration/GroupOfTests/*.js','cypress/integration/BDD/*.feature'],
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 10000,
    reporter: 'mochawesome',
    "env" :
    {
      "QAUrl" : "https://rahulshettyacademy.com/angularpractice/",
      "QAUrlsp" : "https://rahulshettyacademy.com/angularpractice/shop"
    },

    "retries": {

      "runMode": 1,
      "openMode": 0
    }


  },
});

