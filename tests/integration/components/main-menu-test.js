import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'

describeComponent(
  'main-menu',
  'Integration: MainMenuComponent',
  {
    integration: true
  },
  function () {
    it('renders', function () {
      this.render(hbs`{{main-menu}}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
