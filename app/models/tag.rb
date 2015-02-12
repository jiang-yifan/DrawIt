class Tag < ActiveRecord::Base
  validates :tag_name, presence: true, uniqueness: true

  has_many :taggings, dependent: :destroy

  def self.find_or_create tag_name
    @tag = Tag.find_by(tag_name: tag_name) ||
            Tag.create(tag_name: tag_name)
  end
end
