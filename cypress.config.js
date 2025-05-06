const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  video:true,
  e2e: {
    baseUrl: "https://www.amazon.in",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
