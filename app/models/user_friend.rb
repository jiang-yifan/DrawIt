class UserFriend < ActiveRecord::Base
  include CreatesNotifications
  validates :user, :friend, presence: true

  belongs_to :user
  belongs_to(
    :friend,
    class_name: "User",
    foreign_key: :friend_id
  )

  def create_notifications
    Notification.create(
      user_id: user_id,
      content: "#{friend.username} has requested you as a friend!",
      initiator_id: friend_id
    )
  end
end
