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
      Object.assign(ENV, {
        baseUrl: '/',
        locationType: 'none'
      })
      Object.assign(ENV.APP, {
        LOG_ACTIVE_GENERATION: false,
        LOG_VIEW_LOOKUPS: false,
        rootElement: '#ember-testing'
      })
      break
  }

  return ENV
}
