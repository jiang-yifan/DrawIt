DrawIt.Views.Hearts = Backbone.View.extend({
  template: JST["heart/heart"],
  events: {
    "click img": "toggleHeart"
  },

  initialize: function (options) {
    this.heartable = options.heartable;
    this.filledHeart = "https://www.filepicker.io/api/file/kFDmmEprS0fsEdhMtGVq";
    this.emptyHeart = "https://www.filepicker.io/api/file/IhdpwKOeQBSKeJbNXs6W";
  },

  toggleHeart: function () {
    this.count = this.count ? this.count : parseInt(this.$('.heart-count').text());
    if (this.model.id) {
      this.unHeart();
    } else {
      this.heart();
    }
  },

  unHeart: function () {
    this.$('img').attr("src", this.emptyHeart);
    this.model.destroy();
    this.model = new DrawIt.Models.Heart();
    this.count --;
    this.$('.heart-count').text(this.count);
  },

  heart: function () {
    this.count ++;
    this.$('.heart-count').text(this.count);
    this.$('img').attr("src", this.filledHeart);
    var data = {}
    data.heart = {}
    data.heart.heartable_id = this.heartable.id;
    data.heart.heartable_type = this.heartable.constructor.modelType;
    this.model.save(data);
  },

  render: function () {
    var content = this.template({heart: this.model});
    this.$el.html(content);
    if(this.model.id){
      this.$('img').attr("src", this.filledHeart);
    } else {
      this.$('img').attr("src", this.emptyHeart);
    }
    return this;
  }
});
