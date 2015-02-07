class Api::MainPortfoliosController < ApplicationController
  def show
    @main_portfolio = User.find(params[:user_id]).main_portfolio
  end
end
