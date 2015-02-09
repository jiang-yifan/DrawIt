module CreatesNotifications
  extend ActiveSupport::Concern

  included do
    after_save :create_notifications
  end
end
