module HasHearts
  extend ActiveSupport::Concern

  included do
    has_many(
      :hearts,
      as: :heartable,
      dependent: :destroy,
      inverse_of: :heartable
    )
  end
end
