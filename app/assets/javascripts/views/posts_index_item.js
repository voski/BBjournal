BBJournal.Views.PostsIndexItem = Backbone.View.extend({
  tagName: 'li',
  template: JST['posts/index_item'],
  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render)
  },

  events: {
    "click .delete-btn" : "destroyPost",
    "click .link-to-post" : 'goToPost'
  },

  render: function () {
    var content = this.template({ post: this.model });
    this.$el.html(content);
    this.$el.addClass("index-item-content")
    return this;
  },

  destroyPost: function () {
    this.model.destroy();
  },

  goToPost: function () {
    Backbone.history.navigate('/posts/' + this.model.id, {trigger: true})
  },
})
