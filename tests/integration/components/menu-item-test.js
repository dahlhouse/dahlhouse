import {expect} from 'chai'
import {describeComponent, it} from 'ember-mocha'
import hbs from 'htmlbars-inline-precompile'
import {beforeEach} from 'mocha'

describeComponent(
  'menu-item',
  'Integration: MenuItemComponent',
  {
    integration: true
  },
  function () {
    beforeEach(function () {
      this.setProperties({
        relativePath: '',
        routeInfo: {
          route: 'about'
        }
      })
    })

    it('renders', function () {
      this.render(hbs`{{menu-item
        relativePath=relativePath
        routeInfo=routeInfo
      }}`)
      expect(this.$()).to.have.length(1)
    })
  }
)
