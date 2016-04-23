import Ember from 'ember'
const {Component} = Ember
import computed, {readOnly} from 'ember-computed-decorators'

export const routes = [
  'application',
  'about',
  'life'
]

export default Component.extend({
  classNames: ['main-menu'],
  tagName: 'nav',

  @readOnly
  @computed()
  links () {
    return routes.map((route) => {
      return {
        label: this.get('i18n').t(`layout.mainMenu.links.${route}`),
        route
      }
    })
  }
})
