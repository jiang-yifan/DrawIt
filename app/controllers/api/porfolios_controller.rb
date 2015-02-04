class Api::PorfoliosController < ApplicationController
  def index
    @porfolios = current_user.porfolios
    render json: @porfolios
  end

  def create
    @porfolio = current_user.porfolios.new(porfolio_params)
    if @porfolio.save
      render json: @porfolio
    else
      render json: @porfolio.errors.full_messages, status: 422
    end
  end

  private
  def porfolio_params
    params.require(:porfolio).permit(
      :name, :porfolio_image_url, :description,drawing_ids:[]
    )
  end
end
