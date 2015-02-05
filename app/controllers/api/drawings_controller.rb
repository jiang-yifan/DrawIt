class Api::DrawingsController < ApplicationController
  def index
    @drawings = current_user.drawings
  end

  def create
    @drawing = current_user.drawings.new(drawing_params)
    unless @drawing.save
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
