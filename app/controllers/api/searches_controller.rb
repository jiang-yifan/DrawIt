class Api::SearchesController < ApplicationController
  def index
    search = "%" + params[:search] + "%"
    @users = User.where("username Like ?", search)
  end
end
