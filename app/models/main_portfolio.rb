class MainPortfolio < ActiveRecord::Base
  include HasTags
  include HasComments
  include HasHearts
  include HasDrawings
  validates :user, :name, presence: true

  belongs_to :user
end
#
# validates :drawing, uniqueness:{scope: :user,
#   message: "You already included this drawing"}
