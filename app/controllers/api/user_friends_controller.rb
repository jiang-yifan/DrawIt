class Api::UserFriendsController < ApplicationController
  def index
    @friends = current_user.friends
  end

  def create
    @friend = current_user.user_friended.new(
      user_friend_params
    )
  end
  private
  def user_friend_params
    params.require(:user_friended).permit(:friend_id)
  end
end
