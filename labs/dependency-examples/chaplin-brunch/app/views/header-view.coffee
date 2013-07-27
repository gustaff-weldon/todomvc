View = require 'views/base/view'
template = require 'views/templates/header'

module.exports = class HeaderView extends View
  autoRender: yes
  el: '#header'
  events:
    'keypress #new-todo': 'createOnEnter'
  template: template

  createOnEnter: (event) =>
    ENTER_KEY = 13
    title = $(event.currentTarget).val().trim()
    return if event.keyCode isnt ENTER_KEY or not title
    @collection.create {title}
    @$('#new-todo').val ''
