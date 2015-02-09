class Notification < ActiveRecord::Base
  validates :user, :initiator_id, :notifiable, :status, presence: true

  belongs_to :user
  belongs_to :notifiable, polymorphic: true
  belongs_to :initiator, class_name: "User"
end
