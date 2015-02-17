class Api::HeartsController < ApplicationController
  def create
    @heart = current_user.hearts.new(heart_params)
    if @heart.save
      render json: @heart
    else
      render json: {}, status: 422
    end
  end

  def destroy
    @heart = current_user.hearts.find(params[:id])
    if @heart.destroy
      render json: {}
    else
      render json: {}, status: 422
    end
  end

  private
  def heart_params
    params.require(:heart).permit(
      :heartable_id, :heartable_type
    )
  end
end
