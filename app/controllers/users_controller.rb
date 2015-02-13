  class UsersController < ApplicationController

  def get_current_user_id
    render json: current_user.id
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
