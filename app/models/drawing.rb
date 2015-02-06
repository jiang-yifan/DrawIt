class Drawing < ActiveRecord::Base
  validates :user, :file_url, presence: true
  has_many(
    :portfolio_drawings,
    dependent: :destroy,
    inverse_of: :drawing
  )

  has_many(
    :comments,
    as: :commentable,
    dependent: :destroy,
    inverse_of: :commentable
  )

  has_many(
    :taggings,
    as: :taggable,
    dependent: :destroy,
    inverse_of: :taggable
  )

  has_many(
    :hearts,
    as: :heartable,
    dependent: :destroy,
    inverse_of: :heartable
  )

  has_many :user_favorite_drawings, dependent: :destroy

  has_many :tags, through: :taggings
  has_many :portfolios, through: :portfolio_drawings

  belongs_to :user
end
