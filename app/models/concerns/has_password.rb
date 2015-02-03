module HasPassword
  extend ActiveSupport::Concern

  included do
    attr_reader :password, :password_confirmation
    validates :password_digest, presence: true
    validates :password, :password_confirmation, length: { minimum: 6, allow_nil: true}
    validate :confirm_password
  end

  def password_confirmation= password_confirmation
    @password_confirmation = password_confirmation
  end

  def password= password
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def correct_password? password
    BCrypt::Password.new(password_digest).is_password? password
  end

  def confirm_password
    unless password == password_confirmation
      errors[:passwords] << "do not match!"
    end
  end
end
