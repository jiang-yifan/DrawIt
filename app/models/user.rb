class User < ActiveRecord::Base
  include HasPassword
  validates :username, presence: true, uniqueness: true
  has_many :sessions

  def self.find_by_credentials(identifier, password)
    user = User.where("username = ?", identifier).first
    return nil unless user
    user.correct_password?(password) ? user : nil
  end
end
