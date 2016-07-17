import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'search-input',
  'Integration: SearchInputComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{search-input}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
