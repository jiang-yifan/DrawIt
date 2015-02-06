class Portfolio < ActiveRecord::Base
  validates :user, :name, presence: true
  validates :name, uniqueness:{scope: :user,
    message: "already created"}

  belongs_to :user
  has_many(
    :portfolio_drawings,
    as: :portfolio,
    dependent: :destroy,
    inverse_of: :portfolio
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
  has_many :tags, through: :taggings
  has_many :drawings, through: :portfolio_drawings
end
