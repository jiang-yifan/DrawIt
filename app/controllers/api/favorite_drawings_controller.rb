class Api::FavoriteDrawingsController < ApplicationController
  def index
    @favorite_drawings = current_user.favorite_drawings
  end

  def create
    @favorite_drawing = current_user.user_favorite_drawings.new(
      favorite_drawing_params
    )
    if @favorite_drawing.save
    else
      render status: 422
    end
  end

  private
  def favorite_drawing_params
    params.require(:favorite_drawing).permit(
      :drawing_id
    )
  end
end
