class Api::ProfilesController < ApplicationController
  def show
    @profile = User.find(params[:user_id]).profile
  end

  def update
    @profile = current_user.profile
    if @profile.update(profile_params)
      render "show"
    else
      render json: "success", status: 422
    end
  end

  private
  def profile_params
    params.require(:profile).permit(:cover_url, :avatar_url)
  end
end
