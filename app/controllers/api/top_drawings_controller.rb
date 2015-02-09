class Api::TopDrawingsController < ApplicationController
  def index
    @top_drawings = Drawing.top_drawings
  end
end
