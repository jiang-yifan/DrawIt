class Portfolio < ActiveRecord::Base
  include HasTags
  include HasComments
  include HasHearts
  include HasDrawings
  # include UpdatesActivity
  validates :user, :name, presence: true
  validates :name, uniqueness:{scope: :user,
    message: "already created"}

  belongs_to :user
end
