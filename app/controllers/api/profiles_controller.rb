class Api::ProfilesController < ApplicationController
  def show
    @profile = User.find(params[:user_id]).profile
  end
end
