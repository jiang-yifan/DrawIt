Backbone.Modal = Backbone.CompositeView.extend({
  events:{
    "click .overlay": "deleteModal"
  },

  deleteModal: function (event) {
    $(window).unbind('resize.modal');
    this.remove();
    this.trigger("closeModal");
  },

  center: function () {
    var top, left;

    top = Math.max($(window).height() - $(".modal").outerHeight(), 0) / 2;
    left = Math.max($(window).width() - $(".modal").outerWidth(), 0) / 2;

    $('.modal').css({
        top:top,
        left:left
    });
  },

  onRender: function () {
    $('.modal').css({
        width: 'auto',
        height: 'auto'
    })
    this.center();
    $(window).bind('resize.modal', this.center.bind(this));
    this.attachSubviews();
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    this.attachSubviews();
    return this;
  }
})
