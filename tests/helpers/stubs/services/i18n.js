import Ember from 'ember'
const {Service} = Ember

export default Service.extend({
  locale: 'en', // Default to English

  locales: [
    'en', // English
    'es', // Spanish
    'ko' // Korean
  ],

  addTranslations () {
    // Nothing to do in stub
  },

  exists () {
    return true
  },

  t (key) {
    return key
  }
})
