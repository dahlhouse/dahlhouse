import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import {beforeEach} from 'mocha'
import hbs from 'htmlbars-inline-precompile'
import {stubService} from 'dahlhouse/tests/helpers'

describeComponent(
  'search-input',
  'Integration: SearchInputComponent',
  {
    integration: true
  },
  function () {
    beforeEach(function () {
      stubService(this, 'i18n')
    })

    it('renders', function () {
      this.render(hbs`{{search-input}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
