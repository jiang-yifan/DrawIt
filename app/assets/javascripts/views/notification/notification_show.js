DrawIt.Views.NotificationShow = Backbone.CompositeView.extend({
  template: JST['notification/notification_show'],
  events:{
    "click .notification-wrapper": "clicked"
  },

  initialize: function () {
    this.notId = this.model.get('notifiable_id');
  },

  clicked: function (event) {
    event.stopPropagation();
    var view = this;
    this.model.set("status", "viewed");
    this.model.save();
    switch(view.model.get('notifiable_type')){
      case "Portfolio":
        view.navigatePortfolio();
        break;
      case "Drawing":
        view.showDrawing();
        break;
      case "MainPortfolio":
        view.navigateMainPortfolio();
        break;
    }
  },

  navigatePortfolio: function () {
    Backbone.history.navigate(
      "#portfolios/" + this.notId,
      {trigger: true}
    );
  },

  // navigateMainPortfolio: function () {
  //   Backbone.history.navigate(
  //     "#users/"+ this.model.get("user_id") + "/mainportfolio",
  //     {trigger: true}
  //   );
  // },

  showDrawing: function () {
    this.drawing = new DrawIt.Models.Drawing({id: this.notId})
    this.drawing.fetch().done(this.showed.bind(this));
  },

  showed: function () {
    this.showModal();
    this.model.set("status", "viewed");
    this.model.save();
  },

  showModal: function () {
    this.modalView = new DrawIt.Views.DrawingModalShow({
      model: this.drawing
    });
    this.addSubview(".notification-modal-container", this.modalView);
    this.listenTo(this.modalView, "closeModal", this.unShowDrawing);
  },

  unShowDrawing: function () {
    this.removeSubview('.modal-container', this.modalView);
    $('.notifications-wrapper').addClass("hidden");
  },

  render: function () {
    var content = this.template({notification: this.model});
    this.$el.html(content);
    return this;
  }
})
