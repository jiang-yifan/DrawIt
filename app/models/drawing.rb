class Drawing < ActiveRecord::Base
  validates :user, :file_url, presence: true
  has_many(
    :porfolio_drawings,
    dependent: :destroy,
    inverse_of: :drawing
  )

  has_many(:porfolios, through: :porfolio_drawings, source: :porfolio)

  belongs_to :user
end
