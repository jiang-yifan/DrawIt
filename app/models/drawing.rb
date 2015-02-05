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

  has_many(:portfolios, through: :portfolio_drawings, source: :portfolio)

  belongs_to :user
end
