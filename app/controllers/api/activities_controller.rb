class Api::ActivitiesController < ApplicationController
  def index
    @activities = User.find(params[:user_id]).activities
  end
end
