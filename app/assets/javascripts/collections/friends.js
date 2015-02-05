DrawIt.Collections.Friends = Backbone.Collection.extend({
  url: "api/user_friends",
  model: DrawIt.Models.Friend
});
