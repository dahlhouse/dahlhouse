import Ember from 'ember'
const {Component} = Ember
import computed, {readOnly} from 'ember-computed-decorators'
import navigation from '../fixtures/navigation'

export default Component.extend({
  classNames: ['main-menu'],
  tagName: 'ul',

  @readOnly
  @computed()
  links () {
    return navigation.map((routeItem) => {
      return {
        label: this.get('i18n').t(`layout.mainMenu.links.${routeItem.route}`),
        route: routeItem.route
      }
    })
  },

  updateLinks () {
    let lastElementIndex
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
