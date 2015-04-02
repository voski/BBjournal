BBJournal.Views.PostsShow = Backbone.View.extend({
  template: JST['posts/show'],

  events: {
    "dblclick .title, .body": 'editTarget',
    "blur input": 'submitTarget',

  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render),
    this.oldTarget;
  },

  render: function () {
    this.$el.empty();
    var content = this.template({ post: this.model })
    this.$el.html(content)
    return this;
  },

  goToMain: function () {
    Backbone.history.navigate('', {trigger: true})
  },

  goToEdit: function () {
    Backbone.history.navigate('/posts/' + this.model.id + '/edit', {trigger: true})
  },

  editTarget: function (event) {
    var $target = this.oldTarget = $(event.currentTarget);
    var attr = $target.attr('class');
    var val = this.model.escape(attr)

    var $input = $('<input type=text name=' + attr + '>');
    $input.val(val);
    $target.replaceWith($input);
  },

  submitTarget: function (event) {
    var $target = $(event.currentTarget);
    var key = $target.attr('name');
    var val = $target.val();
    var params = {};
    params[key] = val;
    this.model.set(params)

    this.model.save({}, {
      success: function () {
        this.collection.add(this.model);
        this.oldTarget.val(val);
        $target.replaceWith(this.oldTarget);
      }.bind(this),

      error: function (model, response, request) {
        this.errors = _(response.responseJSON);
        this.errors.each(function(error) {
          this.$el.prepend(error)
        }, this)
      }.bind(this),
    })

  },


});
