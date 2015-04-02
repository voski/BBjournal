BBJournal.Views.PostsForm = Backbone.View.extend({
  template: JST['posts/form'],

  events: {
    "click .submit-btn": 'submit',
  },

  initialize: function (options) {
    this.listenTo(this.model, "sync", this.render)
    this.errors;
  },

  render: function () {
    this.$el.empty();
    var content = this.template({ post: this.model, errors: this.errors })
    this.$el.html(content)
    return this;
  },

  submit: function () {
    this.$form = this.$el.find('form');
    var post_params = this.$form.serializeJSON().post;
    this.model.set(post_params);
    this.model.save(post_params, {
      success: function () {
        Backbone.history.navigate('' , {trigger: true})
      }.bind(this),

      error: function (model, response, request) {
        this.errors = _(response.responseJSON);
        this.render();
        this.$el.append(this.model.validationError)
      }.bind(this),
    })
  }
});
