class Heart < ActiveRecord::Base
  validates :user, :heartable, presence: true
  validates :user, uniqueness: {scope: :heartable,
    message: "already hearted"}

  belongs_to :user
  belongs_to :heartable, polymorphic: true
end
