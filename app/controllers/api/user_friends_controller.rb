class Api::UserFriendsController < ApplicationController
  def index
    @friends = User.find(params[:user_id]).friends
  end

  def create
    @user_friend = current_user.friended_users.new(
      user_friend_params
    )
    if @user_friend.save
      render json: @user_friend
    else
      render json: @user_friend.errors.full_messages
    end
  end

  def delete

  end

  private
  def user_friend_params
    params.require(:user_friend).permit(:friend_id)
  end
end
