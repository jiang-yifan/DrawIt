class Api::ActivitiesController < ApplicationController
  def index
    @activities = (Activity.includes(user: :profile)
      .where(user_id: params[:user_id]))
  end
end
