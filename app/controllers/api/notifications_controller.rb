class Api::NotificationsController < ApplicationController
  def index
    @notifications = current_user.notifications.limit(10)
  end

  def update
    @notification = Notification.find(params[:id])
    @notification.update(status: params[:notification][:status])
    render json: @notification
  end
end
