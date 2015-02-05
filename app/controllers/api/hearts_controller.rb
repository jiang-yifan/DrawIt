class Api::HeartsController < ApplicationController
  def create
    @heart = current_user.hearts.new(heart_params)
    if @heart.save
    else
      render status: 422
    end
  end

  private
  def heart_params
    params.require(:heart).permit(
      :heartable_id, :heartable_type
    )
  end
end
