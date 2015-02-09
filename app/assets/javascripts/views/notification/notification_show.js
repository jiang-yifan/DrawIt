DrawIt.Views.NotificationShow = Backbone.CompositeView.extend({
  template: JST['notification/notification_show'],
  events:{
    "click .notification-wrapper": "clicked"
  },

  initialize: function () {
    this.notId = this.model.get('notifiable_id')
  },

  clicked: function () {
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
    if(!this.showing){
      this.showing = true;
      var drawing = new DrawIt.Models.Drawing({id: this.notId})
      var view = this;
      drawing.fetch({
        success: function () {
          view.modalView = new DrawIt.Views.DrawingModalShow({
            model: drawing
          });
          view.addSubview(".modal-container", view.modalView);
          view.listenTo(view.modalView, "closeModal", view.unShowDrawing);
        }
      });
    }
  },

  unShowDrawing: function () {
    this.showing = false;
    this.removeSubview('.modal-container', this.modalView);
  },

  render: function () {
    var content = this.template({notification: this.model});
    this.$el.html(content);
    return this;
  }
})
