import Ember from 'ember'
const {Controller} = Ember

export default Controller.extend({
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
