LogIn.renderViews = function () {
  var logIn = new DrawIt.Views.LogIn({
    el: $('.log-in-form')
  });
  logIn.render();
  logIn.delegateEvents();
}
