BBJournal.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function (options) {
    this.$rootEl = options.$rootEl; // #content
    this.$sideEl = options.$sideEl;

    this.posts = new BBJournal.Collections.Posts();

    this.posts.fetch();
    var view = new BBJournal.Views.PostsIndex({ collection: this.posts });
    this.$sideEl.html(view.render().$el);
  },

  routes: {
    // '' : 'index',
    'posts/new' : 'new',
    'posts/:id': 'show',
    'posts/:id/edit': 'edit',
  },



  show: function (id) {
    var post = this.posts.getOrFetch(id);
    var view = new BBJournal.Views.PostsShow({ model: post, collection: this.posts })
    view.render();
    this.$rootEl.html(view.render().$el)
  },

  edit: function (id) {
    var post = this.posts.getOrFetch(id);
    var view = new BBJournal.Views.PostsForm({ model: post,   })
    view.render();
    this.$rootEl.html(view.render().$el);
  },

  new: function () {
    var post = new BBJournal.Models.Post();
    var view = new BBJournal.Views.PostsForm({ model: post, collection: this.posts });
    this.$rootEl.html(view.render().$el);
  },

});
