DrawIt.Models.Profile = Backbone.Model.extend({
  url: function () {
    return "api/users/" + this.userId + "/profile"
  },

  initialize: function (options) {
    this.userId = options.userId
  },

  parse: function (payload) {
    if(payload.drawings){
      this.drawings().set(payload.drawings, {parse: true});
      delete payload.drawings;
    }
    if(payload.portfolios){
      this.portfolios().set(payload.portfolios, {parse: true});
      delete payload.portfolios;
    }
    if(payload.friends){
      this.friends().set(payload.friends);
      delete payload.friends;
    }
    return payload;
  },

  portfolios: function () {
    if(!this._portfolios){
      this._portfolios =
        new DrawIt.Collections.Portfolios();
    }

    return this._portfolios;
  },

  drawings: function () {
    if(!this._drawings){
      this._drawings =
        new DrawIt.Collections.Drawings();
    }

    return this._drawings;
  },

  friends: function () {
    if(!this._friends){
      this._friends =
        new DrawIt.Collections.Friends();
    }

    return this._friends;
  }

}, {
  modelType: "Profile"
});
