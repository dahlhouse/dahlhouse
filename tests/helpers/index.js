import i18nServiceMock from './stubs/services/i18n'

/**
 * Get stub for a service by name
 * @param  {String} name - name of service to get stub for
 * @returns {Ember.Service} stub for service
 */
export function getStub (name) {
  switch (name) {
    case 'i18n':
      return i18nServiceMock

    default:
      throw Error(`No stub service found for: ${name}`)
  }
}

/**
 * Stub a service for a given context
 * @param {Object} ctx - context in which to register service stub
 * @param {String} name - name of service to stub
 */
export function stubService (ctx, name) {
  const stub = getStub()

  ctx.register(`service:${name}`, stub)
  ctx.inject.service(name, {as: name})
}
