DrawIt.Views.LogIn = Backbone.View.extend({
  template: JST['session/log_in'],
  events: {
    'click .form-button': 'logIn'
  },

  logIn: function (event) {
    event.preventDefault();
    $(event.currentTarget).prop("disabled", true);
    var data = $(event.delegateTarget).serializeJSON();
    var session = new DrawIt.Models.Session();
    var view = this;
    session.save(data,{
      success: function (data) {
        window.location.href = data.get('redirect');
      },
      error: function () {
        view.retry();
      }
    })
  },

  retry: function () {
    $('.form-button').prop("disabled", false);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }
})
