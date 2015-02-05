class Heart < ActiveRecord::Base
  validates :user, :heartable, presence: true

  belongs_to :user
  belongs_to :heartable, polymorphic: true
end
