import Ember from 'ember'
const {Component, inject} = Ember

export default Component.extend({
  i18n: inject.service(),

  classNames: ['app-bar'],
  tagName: 'nav'
})
