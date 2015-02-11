class Api::DrawingsController < ApplicationController
  def index
    @drawings = User.find(params[:user_id]).drawings
  end

  def create
    @drawing = current_user.drawings.new(drawing_params)
    if @drawing.save
      render json: @drawing
    else
      render json: @drawing.errors.full_messages, status: 422
    end
  end

  def show
    @drawing = Drawing.find(params[:id])
  end

  private
  def drawing_params
    params.require(:drawing).permit(:file_url)
  end
end
