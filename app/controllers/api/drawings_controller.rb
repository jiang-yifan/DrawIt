class Api::DrawingsController < ApplicationController
  def index
    @drawings = current_user.drawings
    render json: @drawings
  end

  def create
    @drawing = current_user.drawings.new(drawing_params)
    if @drawing.save
      render json: @drawing
    else
      render json: @drawing.errors.full_messages, status: 422
    end
  end

  private
  def drawing_params
    params.require(:drawing).permit(:file_url)
  end
end
