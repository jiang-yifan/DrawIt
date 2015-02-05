class PortfolioDrawing < ActiveRecord::Base
  validates :drawing, :portfolio, presence: true

  belongs_to :portfolio, polymorphic: true
  belongs_to :drawing
end
