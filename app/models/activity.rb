class Activity < ActiveRecord::Base
  validates :user, :activity, presence: true

  belongs_to :user
  belongs_to :activity, polymorphic: true
end
