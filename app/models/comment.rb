class Comment < ActiveRecord::Base
  include HasHearts
  validates :body, :user, :commentable, presence: true

  belongs_to :commentable, polymorphic: true
  belongs_to :user

end
