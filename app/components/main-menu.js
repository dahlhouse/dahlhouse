import Ember from 'ember'
const {Component} = Ember
import computed, {readOnly} from 'ember-computed-decorators'
import {mainRoutes} from '../router'

export default Component.extend({
  classNames: ['main-menu'],
  tagName: 'nav',

  @readOnly
  @computed()
  links () {
    return ['application'].concat(mainRoutes).map((route) => {
      return {
        label: this.get('i18n').t(`layout.mainMenu.links.${route}`),
        route
      }
    })
  }
})
