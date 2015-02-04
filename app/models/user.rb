class User < ActiveRecord::Base
  include HasPassword
  validates :username, presence: true, uniqueness: true
  
  has_one :main_porfolio, dependent: :destroy

  has_many :sessions, dependent: :destroy
  has_many :drawings, dependent: :destroy
  has_many :porfolios, dependent: :destroy

  def self.find_by_credentials(identifier, password)
    user = User.where("username = ?", identifier).first
    return nil unless user
    user.correct_password?(password) ? user : nil
  end
end
