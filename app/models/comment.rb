class Comment < ActiveRecord::Base
  include HasHearts
  include CreatesNotifications
  validates :body, :user, :commentable, presence: true

  belongs_to :commentable, polymorphic: true
  belongs_to :user

  def create_notifications
    if commentable.user.id != user_id
      Notification.create(
        user_id: commentable.user.id,
        initiator_id: user_id,
        notifiable_id: commentable_id,
        notifiable_type: commentable_type,
        content: "has commented on your #{commentable_type.downcase}")
    end
  end
end
