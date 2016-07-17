module.exports = function (environment) {
  var ENV = {
    APP: {},
    baseURL: '/',
    EmberENV: {
      FEATURES: {}
    },
    environment: environment,
    i18n: {
      defaultLocale: 'en'
    },
    locationType: 'auto',
    modulePrefix: 'dahlhouse'
  }

  switch (environment) {
    case 'development':
      break

    case 'production':
      break

    case 'test':
      ENV.baseUrl = '/'
      ENV.locationType = 'none'
      ENV.APP.LOG_ACTIVE_GENERATION = false
      ENV.APP.LOG_VIEW_LOOKUPS = false
      ENV.app.rootElement = '#ember-testing'
      break
  }

  return ENV
}
