import Ember from 'ember'
const {Component} = Ember
import computed, {readOnly} from 'ember-computed-decorators'
import {PropTypes} from 'ember-prop-types'

export default Component.extend({
  classNames: ['menu-item'],
  tagName: 'li',

  propTypes: {
    relativePath: PropTypes.string.isRequired,
    routeInfo: PropTypes.object.isRequired
  },

  @readOnly
  @computed('relativePath', 'routeInfo')
  routePath (relativePath, routeInfo) {
    if (relativePath) {
      return `${relativePath}.${routeInfo.route}`
    }

    return routeInfo.route
  },

  @readOnly
  @computed('routePath')
  text (routePath) {
    let key = `layout.mainMenu.links.${routePath}.text`
    return this.get('i18n').t(key)
  }
})
