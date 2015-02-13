LogIn.renderViews = function () {
  this.logIn = new DrawIt.Views.LogIn({
    el: $('.log-in-form')
  });
  this.logIn.render();
  this.logIn.delegateEvents();
  this.signUpView = new DrawIt.Views.SignUp({
    el: $('.sign-up-container')
  });
  this.signUpView.render();
  this.signUpView.delegateEvents();
};
