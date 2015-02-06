class Tagging < ActiveRecord::Base
  validates :tag, :taggable, presence: true
  validates :tag, uniqueness:{scope: :taggable,
      message: "already exists"}

  belongs_to :taggable, polymorphic: true
  belongs_to :tag
end
