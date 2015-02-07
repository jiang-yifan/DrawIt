class Following < ActiveRecord::Base
  validates :followed, :followee, presence: true
  validates :followed, uniqueness: {scope: :followee,
          message: "already"}
          
  belongs_to(
    :followed,
    class_name: "User",
    foreign_key: :followed_id
  )

  belongs_to(
    :followee,
    class_name: "User",
    foreign_key: :followee_id
  )
end
