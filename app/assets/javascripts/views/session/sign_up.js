DrawIt.Views.SignUp = Backbone.View.extend({
  template: JST['session/sign_up'],
  events: {
    'click .new-user': 'signUp',
    'click .guest': 'logInGuest'
  },

  logInGuest: function (event) {
    event.preventDefault();
    data = {};
    data.user = {
      username: "Leonardo",
      password: "password"
    };
    $(event.currentTarget).prop('disabled', true);
    $(event.currentTarget).text('Loggin In...')
    $.ajax({
      url: "/session",
      method: "post",
      data: data,
      dataType: "json",
      success: function(result){
        window.location.href = result.redirect;
      }
    });
  },

  signUp: function (event) {
    event.preventDefault();
    $(event.currentTarget).prop("disabled", true);

    var data = $("form").serializeJSON();
    var user = new DrawIt.Models.User();
    var view = this;
    user.save(data,{
      success: function (data) {
        window.location.href = data.get('redirect');
      },
      error: function () {
        view.retry();
      }
    })
  },

  retry: function () {
    $('.new-user').prop("disabled", false);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})
