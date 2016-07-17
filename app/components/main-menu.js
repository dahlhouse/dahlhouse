/* global $ */
import Ember from 'ember'
const {Component, inject} = Ember
import routes from '../fixtures/routes'

export default Component.extend({
  i18n: inject.service(),

  classNames: ['main-menu'],
  tagName: 'ul',

  routes,

  updateLinks () {
    let usedWidth = 0
    const $ul = this.$()
    const $linkItems = $ul.find('li:not(:last)')
    const $moreItem = $ul.find('li:last')
    const availableWidth = $ul.width() - $moreItem.width()
    const moreLinkItems = []

    $linkItems.each((index, linkItem) => {
      const $linkItem = $(linkItem)
      usedWidth += $linkItem.width()
      const hide = usedWidth > availableWidth
      $linkItem.toggleClass('hide', hide)

      if (hide) {
        moreLinkItems.push($linkItem)
      }
    })

    if (moreLinkItems.length === 1) {
      const $lastLinkItem = $linkItems.last()
      const remainingWidthWithoutMore = availableWidth - (usedWidth - $moreItem.width())

      if (remainingWidthWithoutMore >= $lastLinkItem.width()) {
        usedWidth = usedWidth - $moreItem.width() + $lastLinkItem.width()
        $lastLinkItem.removeClass('hide')
      }
    }

    const showMoreMenu = usedWidth > availableWidth
    $moreItem.toggle(showMoreMenu)
  },

  didInsertElement () {
    this._super(...arguments)
    this.updateLinks()

    this._resizeHandler = () => {
      this.updateLinks()
    }

    $(window).resize(this._resizeHandler)
  },

  willDestroyElement () {
    $(window).off('resize', this._resizeHandler)
    this._super(...arguments)
  }
})
