class User < ActiveRecord::Base
  include HasPassword
  validates :username, presence: true, uniqueness: true

  has_one :main_portfolio, dependent: :destroy

  has_many :sessions, dependent: :destroy
  has_many :drawings, dependent: :destroy
  has_many :portfolios, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :hearts, dependent: :destroy
  has_many :user_favorite_drawings, dependent: :destroy

  has_many(
    :friended_users,
    class_name: "UserFriend",
    foreign_key: :user_id,
    dependent: :destroy
  )

  has_many(
    :users_friended,
    class_name: "UserFriend",
    foreign_key: :friend_id,
    dependent: :destroy
  )

  has_many(
    :favorite_drawings,
    through: :user_favorite_drawings,
    source: :drawing
  )

  has_many(
    :friends,
    through: :friended_users,
    source: :friend
  )

  def self.find_by_credentials(identifier, password)
    user = User.where("username = ?", identifier).first
    return nil unless user
    user.correct_password?(password) ? user : nil
  end
end
