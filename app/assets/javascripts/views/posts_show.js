BBJournal.Views.PostsShow = Backbone.View.extend({
  template: JST['posts/show'],

  events: {
    "click .link-to-main": 'goToMain',
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    this.$el.empty();
    var content = this.template({ post: this.model })
    this.$el.html(content)
    return this;
  },

  goToMain: function () {
    Backbone.history.navigate('', {trigger: true})
  }
});
