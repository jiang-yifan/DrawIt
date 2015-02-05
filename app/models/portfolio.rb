class Portfolio < ActiveRecord::Base
  validates :user, :name, presence: true
  validates :name, uniqueness:{scope: :user,
    message: "You already have that portfolio"}

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

  has_many :drawings, through: :portfolio_drawings, source: :drawing
end
