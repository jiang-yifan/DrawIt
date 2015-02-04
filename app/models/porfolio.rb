class Porfolio < ActiveRecord::Base
  validates :user, :name, presence: true
  validates :name, uniqueness:{scope: :user,
    message: "You already have that porfolio"}

  belongs_to :user
  has_many(
    :porfolio_drawings,
    as: :porfolio,
    dependent: :destroy,
    inverse_of: :porfolio
  ) 

  has_many :drawings, through: :porfolio_drawings, source: :drawing
end
