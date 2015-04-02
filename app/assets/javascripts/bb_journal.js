window.BBJournal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new BBJournal.Routers.PostsRouter({$rootEl: $('#main')});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  BBJournal.initialize();
  $('.header').click(function() {
    document.location.hash = ''
  })
});
