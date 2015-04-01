BBJournal.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.posts = new BBJournal.Collections.Posts();
  },

  routes: {
    '': 'index',
    'posts/:id': 'show',
  },

  index: function () {
    this.posts.fetch();
    var view = new BBJournal.Views.PostsIndex({collection: this.posts})
    view.render();
    this.$rootEl.html(view.$el)
  },

  show: function (id) {
    var post = this.posts.getOrFetch(id);
    var view = new BBJournal.Views.PostsShow({model: post})
    view.render();
    this.$rootEl.html(view.$el)
  },


});
