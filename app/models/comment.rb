class Comment < ActiveRecord::Base
  include HasHearts
  include CreatesNotifications
  validates :body, :user, :commentable, presence: true

  belongs_to :commentable, polymorphic: true
  belongs_to :user

  def create_notifications
    Notification.create(
      user_id: commentable.user.id,
      initiator_id: user_id,
      notifiable_id: commentable_id,
      notifiable_type: commentable_type,
      content: "#{user.username} has commented on your #{commentable_type.downcase}")
  end
end
