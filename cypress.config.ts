import { defineConfig } from "cypress"

export default defineConfig({
  viewportHeight: 1500,
  viewportWidth: 1980,
  e2e: {
    specPattern: 'cypress/e2e/**/*.{e2e.ts,e2e.js}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
