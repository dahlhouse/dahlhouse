import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import {beforeEach} from 'mocha'
import hbs from 'htmlbars-inline-precompile'
import {initialize} from 'dahlhouse/initializers/i18n'

describeComponent(
  'search-input',
  'Integration: SearchInputComponent',
  {
    integration: true
  },
  function () {
    beforeEach(function () {
      initialize(this)
    })

    it('renders', function () {
      this.render(hbs`{{search-input}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
