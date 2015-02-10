class FriendRequest < ActiveRecord::Base
  validates :sender, :recipient, presence: true
  validates :sender, uniqueness: {scope: :recipient}

  belongs_to :sender, class_name: "User"
  belongs_to :recipient, class_name: "User"
end
