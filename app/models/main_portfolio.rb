class MainPortfolio < ActiveRecord::Base
  include HasTags
  include HasComments
  include HasHearts
  include HasDrawings
  validates :user, :name, presence: true

  belongs_to :user
end
