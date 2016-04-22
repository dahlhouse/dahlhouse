import Ember from 'ember'
const {Component} = Ember
import computed, {readOnly} from 'ember-computed-decorators'

export default Component.extend({
  @readOnly
  @computed()
  links () {
    return [
      {
        label: 'Home',
        route: 'application'
      },
      {
        label: 'About',
        route: 'about'
      }
    ]
  }
})
