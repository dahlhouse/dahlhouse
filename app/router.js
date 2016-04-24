import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({
  location: config.locationType
})

// NOTE: routes should be in order they appear in menu
export const mainRoutes = [
  'about',
  'kitchen',
  'classroom',
  'litterbox',
  'backyard'
]

Router.map(function () {
  mainRoutes.forEach((route) => {
    this.route(route)
  })
})

export default Router
