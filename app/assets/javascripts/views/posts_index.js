BBJournal.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],
  initialize: function (options) {
    this.listenTo(this.collection, "sync remove", this.render)
  },

  events: {
    "click .link-to-new": "new"
  },

  render: function () {

    var content = this.template();
    this.$el.html(content);

    this.collection.each(function(post) {
      var content = new BBJournal.Views.PostsIndexItem({
        model: post
      })
      this.$('ol').append(content.render().$el)
    }, this)

    this.$el.prepend($("<p class='link-to-new'>make a new post</p>"))
    this.$el.addClass("index-content")
    return this;
  },

  new: function() {
    Backbone.history.navigate('/posts/new', {trigger: true})
  }
});
