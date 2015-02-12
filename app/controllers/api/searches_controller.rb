class Api::SearchesController < ApplicationController
  def index
    search = "%" + params[:search].upcase + "%"
    @users = User.where("upper(username) Like ?", search)
  end
end
