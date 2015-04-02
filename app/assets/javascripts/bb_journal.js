window.BBJournal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new BBJournal.Routers.PostsRouter({
      $rootEl: $('#content'),
      $sideEl: $('#sidebar')
      });

    Backbone.history.start();
  }
};

$(document).ready(function(){
  BBJournal.initialize();
  $('.header').click(function() {
    document.location.hash = ''
  })
});
