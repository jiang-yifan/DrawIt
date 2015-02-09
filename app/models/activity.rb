class Activity < ActiveRecord::Base
  validates :user, :activity, presence: true

  belongs_to :user
  belongs_to :activity, polymorphic: true

  def self.friends_activities current_user
    Activity.where(user_id: current_user.friend_ids)
  end
end
