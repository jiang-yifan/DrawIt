module HasTags
  extend ActiveSupport::Concern

  included do
    has_many(
      :taggings,
      as: :taggable,
      dependent: :destroy,
      inverse_of: :taggable
    )

    has_many :tags, through: :taggings
  end
end
