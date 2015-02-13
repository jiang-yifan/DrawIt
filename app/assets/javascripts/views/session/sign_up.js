DrawIt.Views.SignUp = Backbone.View.extend({
  template: JST['session/sign_up'],
  events: {
    'click .new-user': 'signUp'
  },

  signUp: function (event) {
    event.preventDefault();
    $(event.currentTarget).prop("disabled", true)
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

  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})
