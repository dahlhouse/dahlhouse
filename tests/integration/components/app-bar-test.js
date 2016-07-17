import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'app-bar',
  'Integration: AppBarComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{app-bar i18n=i18n}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
