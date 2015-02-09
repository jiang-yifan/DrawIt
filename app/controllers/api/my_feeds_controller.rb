class Api::MyFeedsController < ApplicationController
  def index
    @friends_activities = Activity.friends_activities(current_user)
  end
end
