class Api::MyFeedsController < ApplicationController
  def index
    @friends_activities = Activity.followed_activities(current_user)
  end
end
