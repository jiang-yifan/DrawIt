class Session < ActiveRecord::Base
  validates :token, :user, presence: true
  validates :token, uniqueness: true

  belongs_to :user

  after_initialize :ensure_token

  def self.generate_token
    SecureRandom.urlsafe_base64
  end

  def ensure_token
    self.token ||= self.class.generate_token
  end
end
