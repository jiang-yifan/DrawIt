module HasDrawings
  extend ActiveSupport::Concern

  included do
    has_many(
      :portfolio_drawings,
      as: :portfolio,
      dependent: :destroy,
      inverse_of: :portfolio
    )
    has_many :drawings, through: :portfolio_drawings
  end
end
