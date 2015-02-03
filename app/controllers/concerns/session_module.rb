module SessionModule
  extend ActiveSupport::Concern

  included do
    helper_method :current_user
  end

  def current_user
    current_session ||= Session.find_by(token: session[:token])
    current_session ? current_session.user : nil
  end

  def log_in! user
    current_session = user.sessions.create()
    session[:token] = current_session.token
  end

  def log_out!
    current_session ||= Session.find_by(token: session[:token])
    current_session.destroy
    session[:token] = nil
  end

  def require_login
    unless current_user
      redirect_to new_session_url
    end
  end
end
