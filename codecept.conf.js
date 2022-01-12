const { setHeadlessWhen } = require('@codeceptjs/configure')

setHeadlessWhen(process.env.HEADLESS)

exports.config = {
  tests: './e2e/*.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://localhost:5000',
      show: true,
      browser: 'chromium',
    },
  },
  include: {
    I: './steps_file.js',
    cpf_test: './pages/cpf_test.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'tsm-func',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
}
