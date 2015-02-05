class UserFavoriteDrawing < ActiveRecord::Base
  validates :user, :drawing, presence: true

  belongs_to :user
  belongs_to :drawing
end
