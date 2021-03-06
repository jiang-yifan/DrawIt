class User < ActiveRecord::Base
  include HasPassword
  include HasFollowings
  include HasFriends
  include HasFriendRequests
  validates :username, presence: true, uniqueness: true

  has_one :main_portfolio, dependent: :destroy
  has_one :profile, dependent: :destroy

  has_many :comments, dependent: :destroy
  has_many :notifications, dependent: :destroy
  has_many :sessions, dependent: :destroy
  has_many :drawings, dependent: :destroy
  has_many :portfolios, dependent: :destroy
  has_many :user_favorite_drawings, dependent: :destroy
  has_many :activities, dependent: :destroy
  has_many :hearts, dependent: :destroy
  
  has_many(
    :favorite_drawings,
    through: :user_favorite_drawings,
    source: :drawing
  )

  after_save :initiate_user

  def self.find_by_credentials(identifier, password)
    user = User.where("username = ?", identifier).first
    return nil unless user
    user.correct_password?(password) ? user : nil
  end

  def initiate_user
    MainPortfolio.create(user_id: id)
    Profile.create(user_id: id)
  end
end
