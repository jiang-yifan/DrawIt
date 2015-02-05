class UserFriend < ActiveRecord::Base
  validates :user, :friend, presence: true
  
  belongs_to :user
  belongs_to(
    :friend,
    class_name: "User",
    foreign_key: :friend_id
  )
end
