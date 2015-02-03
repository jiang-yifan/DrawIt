class ApplicationController < ActionController::Base
  include SessionModule
  protect_from_forgery with: :exception
end
