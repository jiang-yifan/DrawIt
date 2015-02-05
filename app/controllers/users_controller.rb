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
      log_in! @user
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      log_in! @user
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :edit
    end
  end

  def index
    @artists = User.all
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    flash[:confirmation] = ["You have successfully deleted you account!"]
    redirect_to users_url
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :password_confirmation)
  end

end
