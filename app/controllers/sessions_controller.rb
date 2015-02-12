class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password],
    );
    if @user
      log_in! @user
      render json: {redirect: root_url}
    else
      render json: ["incorrect password"], status: 422
    end
  end

  def destroy
    log_out!
    render json: {redirect: new_session_url}
  end
end
