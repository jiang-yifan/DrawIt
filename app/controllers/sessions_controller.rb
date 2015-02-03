class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password],
    );
    if @user
      log_in! @user
      redirect_to root_url
    else
      render :new
    end
  end
end
