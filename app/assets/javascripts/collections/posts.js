BBJournal.Collections.Posts = Backbone.Collection.extend({
  url: 'api/posts',
  model: BBJournal.Models.Post,

  getOrFetch: function(id) {
    var posts = this;

    var post;
    if (!(post = this.get(id))) {
      post = new BBJournal.Models.Post({ id: id });
      post.fetch({
        success: function () { posts.add(post); }
      });
    }

    return post;
  },

});
