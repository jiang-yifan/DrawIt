class UserFriend < ActiveRecord::Base
  include CreatesNotifications
  validates :user, :friend, presence: true
  validates :user, uniqueness:{scope: :friend}

  belongs_to :user
  belongs_to(
    :friend,
    class_name: "User",
    foreign_key: :friend_id
  )

  after_save :send_request
  after_update :follow_friend

  def create_notifications
    Notification.create(
      user_id: user_id,
      content: "#{friend.username} has requested you as a friend!",
      initiator_id: friend_id
    )
  end

  def send_request
    FriendRequest.create(sender_id: user_id, recipient_id: friend_id)
  end

  def follow_friend
    if status == "approved"
      UserFriend.create(user_id: friend_id, friend_id: user_id)
      user.followed_users.create(followed_id: friend_id)
      friend.followed_users.create(followed_id: user_id)
    end
  end
end
