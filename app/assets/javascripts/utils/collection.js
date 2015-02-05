Backbone.Collection = Backbone.Collection.extend({
  getOrFetch: function (id, model_name) {
    var model = this.get(id);
    if(model){
      model.fetch();
    }else{
      model = new DrawIt.Models[model_name]({id: id})
      var collection = this;
      model.fetch({
        success: function () {
          collection.add(model);
        }
      });
    }

    return model
  }
})
