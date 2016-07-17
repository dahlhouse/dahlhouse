import {describe, it, beforeEach, afterEach} from 'mocha'
import {expect} from 'chai'
import startApp from '../helpers/start-app'
import destroyApp from '../helpers/destroy-app'

describe('Acceptance: ChangeLanguage', function () {
  let application

  beforeEach(function () {
    application = startApp()
  })

  afterEach(function () {
    destroyApp(application)
  })

  it('can visit /change-language', function () {
    visit('/')

    andThen(function () {
      expect(currentPath()).to.equal('index')
    })

    visit('/?lang=ko')

    andThen(function () {
      expect(currentPath()).to.equal('index')
    })
  })
})
