class PorfolioDrawing < ActiveRecord::Base
  validates :drawing, :porfolio, presence: true

  belongs_to :porfolio, polymorphic: true
  belongs_to :drawing
end
