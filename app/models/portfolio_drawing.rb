class PortfolioDrawing < ActiveRecord::Base
  validates :drawing, :portfolio, presence: true
  validates :drawing, uniqueness: {scope: :portfolio,
      message: "already exists"}

  belongs_to :portfolio, polymorphic: true
  belongs_to :drawing
end
