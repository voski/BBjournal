BBJournal.Views.PostsIndex = Backbone.View.extend({
  template: JST['posts/index'],
  initialize: function (options) {
    this.listenTo(this.collection, "sync remove", this.render)
  },

  render: function () {
    this.$el.empty();
    this.collection.each(function(post) {
      var content = new BBJournal.Views.PostsIndexItem({ model: post })
      this.$el.append(content.render().$el)
    }, this)

    return this;
  }
});
