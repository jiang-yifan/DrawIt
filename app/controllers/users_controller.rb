class UsersController < ApplicationController
  # before_action :correct_user, only: [:edit, :update, :destroy]
  before_action :require_login, except: [:new, :create]
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      MainPortfolio.create(user_id: @user.id)
      Profile.create(user_id: @user.id)
      log_in! @user
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def get_current_user_id
    render json: current_user.id
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
