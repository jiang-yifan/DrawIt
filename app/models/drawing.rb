class Drawing < ActiveRecord::Base
  include HasTags
  include HasComments
  include HasHearts
  include UpdatesActivity
  include TopDrawings
  validates :user, :file_url, presence: true
  validates :file_url, uniqueness: true
  has_many(
    :portfolio_drawings,
    dependent: :destroy,
    inverse_of: :drawing
  )

  has_many :user_favorite_drawings, dependent: :destroy
  has_many :portfolios, through: :portfolio_drawings

  belongs_to :user
end
