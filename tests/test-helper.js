import resolver from 'dahlhouse/tests/helpers/resolver'
import i18n from 'dahlhouse/services/i18n'
import Ember from 'ember'
const {Test} = Ember
import {setResolver} from 'ember-mocha'

Test.registerHelper('t', function (app, key, interpolations) {
  return i18n.t(key, interpolations)
})

setResolver(resolver)
