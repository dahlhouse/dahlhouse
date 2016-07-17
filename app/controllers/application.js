import Ember from 'ember'
const {Controller, inject} = Ember

export default Controller.extend({
  i18n: inject.service(),

  queryParams: ['lang'],
  lang: null,

  init () {
    this._super(...arguments)

    this.addObserver('lang', () => {
      const lang = this.get('lang') || 'en'
      this.set('i18n.locale', lang)
    })
  }
})
