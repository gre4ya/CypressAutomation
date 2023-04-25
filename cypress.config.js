const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}


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
    setupNodeEvents,
   specPattern: 'cypress/integration/examples/BDD/*.feature'
    //specPattern: 'cypress/integration/examples/*.js'
  }

});

// npx cypress run --spec cypress/integration/examples/Test9_Framework.js --headed --browser chrome --env url="https://rahulshettyacademy.com"

// npx cypress run --record --key ba97c6fd-344e-42e4-b82a-5eb0de0e6e01 --spec cypress/integration/examples/Test7.js --headed --browser chrome