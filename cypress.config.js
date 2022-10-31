const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'tj562t',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/UI/*.js',
    screenshotOnRunFailure: true,
    screenshotsFolder: 'cypress/screenshots',
    defaultCommandTimeout: 6000,
    pageLoadTimeout: 10000,
    reporter: 'mochawesome',
    "env" :
    {
      "QAUrl" : "https://rahulshettyacademy.com/angularpractice/",
      "QAUrlsp" : "https://rahulshettyacademy.com/angularpractice/shop"
    }



  },
});

