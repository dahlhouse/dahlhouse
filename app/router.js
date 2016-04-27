import Ember from 'ember'
import config from './config/environment'
import routes from './fixtures/routes'

const Router = Ember.Router.extend({
  location: config.locationType
})

function addRoute (routeItem) {
  this.route(routeItem.route, function () {
    if (routeItem.children) {
      routeItem.children.forEach(addRoute.bind(this))
    }
  })
}

Router.map(function () {
  routes.forEach(addRoute.bind(this))
})

export default Router
