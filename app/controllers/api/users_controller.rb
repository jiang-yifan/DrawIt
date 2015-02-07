class Api::UsersController < ApplicationController
  def show
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
