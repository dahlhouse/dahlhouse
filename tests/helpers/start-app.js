import Ember from 'ember'
const {run} = Ember
import Application from '../../app'
import config from '../../config/environment'
import './ember-i18n/test-helpers'

export default function startApp (attrs) {
  let application

  let attributes = Object.assign({}, config.APP)
  attributes = Object.assign(attributes, attrs) // use defaults, but you can override;

  run(() => {
    application = Application.create(attributes)
    application.setupForTesting()
    application.injectTestHelpers()
  })

  return application
}
