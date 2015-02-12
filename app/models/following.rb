class Following < ActiveRecord::Base
  validates :followed, :followee, presence: true
  validates :followed, uniqueness: {scope: :followee,
          message: "already"}
  validate :unique

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

  def unique
    if followed_id == followee_id
      errors.add(:followee, "can't be the same as followed")
    end
  end
end
