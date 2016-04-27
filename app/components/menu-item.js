import Ember from 'ember'
const {Component} = Ember
import computed, {readOnly} from 'ember-computed-decorators'
import PropTypeMixin, {PropTypes} from 'ember-prop-types'

export default Component.extend(PropTypeMixin, {
  tagName: 'li',

  propTypes: {
    relativePath: PropTypes.string.isRequired,
    routeInfo: PropTypes.object.isRequired
  },

  @readOnly
  @computed('relativePath', 'routeInfo')
  text (relativePath, routeInfo) {
    let key = 'layout.mainMenu.links'

    if (relativePath) {
      key += `.${relativePath}`
    }

    key += `.${routeInfo.route}.text`

    return this.get('i18n').t(key)
  }
})
