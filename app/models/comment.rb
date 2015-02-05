class Comment < ActiveRecord::Base
  validates :body, :user, :commentable, presence: true

  belongs_to :commentable, polymorphic: true
  belongs_to :user

  has_many(
    :hearts,
    as: :heartable,
    dependent: :destroy,
    inverse_of: :heartable
  )
end
