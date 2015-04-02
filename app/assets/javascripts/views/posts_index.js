BBJournal.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],
  initialize: function (options) {
    this.listenTo(this.collection, "sync remove", this.render)
  },

  events: {
    "click .link-to-new": "new"
  },

  render: function () {
    this.$el.empty();
    this.collection.each(function(post) {
      var content = new BBJournal.Views.PostsIndexItem({ model: post })
      this.$el.append(content.render().$el)
    }, this)
    this.$el.prepend($("<p class='link-to-new'>make a new post</p>"))
    return this;
  },

  new: function() {
    Backbone.history.navigate('/posts/new', {trigger: true})
  }
});
