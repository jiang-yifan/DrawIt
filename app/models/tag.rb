class Tag < ActiveRecord::Base
  validates :tag_name, presence: true, uniqueness: true

  has_many :taggings, dependent: :destroy
end
