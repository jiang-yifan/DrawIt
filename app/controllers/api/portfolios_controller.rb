class Api::PortfoliosController < ApplicationController
  def index
    @portfolios = current_user.portfolios
    render json: @portfolios
  end

  def create
    @portfolio = current_user.portfolios.new(portfolio_params)
    if @portfolio.save
      render json: @portfolio
    else
      render json: @portfolio.errors.full_messages, status: 422
    end
  end

  def show
    @portfolio = Portfolio.find(params[:id])
  end

  private
  def portfolio_params
    params.require(:portfolio).permit(
      :name, :portfolio_image_url, :description,drawing_ids:[]
    )
  end
end
