const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9xru59',

  defaultCommandTimeout:6000,
  env:{
    url:'https://rahulshettyacademy.com'
  },
  retries: {
    runMode: 1 // will re-run failed test cases
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  }
});

// npx cypress run --spec cypress/integration/examples/Test9_Framework.js --headed --browser chrome --env url="https://rahulshettyacademy.com"

// npx cypress run --record --key ba97c6fd-344e-42e4-b82a-5eb0de0e6e01 --spec cypress/integration/examples/Test7.js --headed --browser chrome