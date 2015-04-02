window.BBJournal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new BBJournal.Routers.PostsRouter({$rootEl: $('#content')});
    new BBJournal.Routers.PostsRouter({$rootEl: $('#sidebar')});

    Backbone.history.start();
  }
};

$(document).ready(function(){
  BBJournal.initialize();
  $('.header').click(function() {
    document.location.hash = ''
  })
});
