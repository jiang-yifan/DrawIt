class Drawing < ActiveRecord::Base
  include HasTags
  include HasComments
  include HasHearts
  include UpdatesActivity
  include TopDrawings

  attr_accessor :tag_names

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

  def make_tags
    if tag_names
      tag_names.each do |tag_name|
        tag = Tag.find_or_create(tag_name)
        taggings.create(tag_id: tag.id)
      end
    end
  end
end
