import {expect} from 'chai'
import {beforeEach, describe, it} from 'mocha'
import Ember from 'ember'
const {Application, run} = Ember
import {initialize} from 'dahlhouse/initializers/i18n'

describe('I18nInitializer', function () {
  let application

  beforeEach(function () {
    run(() => {
      application = Application.create()
      application.deferReadiness()
    })
  })

  // Replace this with your real tests.
  it('works', function () {
    initialize(application)

    // you would normally confirm the results of the initializer here
    expect(true).to.be.ok
  })
})
