class Api::FavoriteDrawingsController < ApplicationController
  def index
    @favorite_drawings = current_user.favorite_drawings
  end

  def create
    @favorite_drawing = current_user.user_favorite_drawings.new(
      favorite_drawing_params
    )
    if @favorite_drawing.save
      render json: @favorite_drawing
    else
      render json: {}, status: 422
    end
  end

  def destroy
    @favorite_drawings = current_user.user_favorite_drawings.find(params[:id])
    if @favorite_drawings.destroy
      render json: {}
    else
      render json: {}, status: 422
    end
  end


  private
  def favorite_drawing_params
    params.require(:favorite_drawing).permit(
      :drawing_id
    )
  end
end
