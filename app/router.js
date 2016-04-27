import Ember from 'ember'
import config from './config/environment'
import navigation from './fixtures/navigation'

const Router = Ember.Router.extend({
  location: config.locationType
})

Router.map(function () {
  navigation.forEach((routeItem) => {
    this.route(routeItem.route)
  })
})

export default Router
