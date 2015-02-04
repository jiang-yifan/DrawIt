class MainPorfolio < ActiveRecord::Base
  validates :user, :name, presence: true

  belongs_to :user
  has_many :porfolio_drawings, as: :porfolio, dependent: :destroy

  has_many :drawings, through: :porfolio_drawings, source: :drawing
end
#
# validates :drawing, uniqueness:{scope: :user,
#   message: "You already included this drawing"}
