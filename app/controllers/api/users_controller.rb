class Api::UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      log_in! @user
      render json: {redirect: root_url}
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: ["error"], status: 422
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save
      log_in! @user
      render json: {redirect: root_url}
    else
      flash.now[:errors] = @user.errors.full_messages
      render json: ["error"], status: 422
    end
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
