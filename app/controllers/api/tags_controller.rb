class Api::TagsController < ApplicationController

  def create
    tag_name = params[:tag][:tag_name]
    @tag = Tag.find_by(tag_name: tag_name)
    @tag = Tag.create(tag_name: tag_name) unless @tag
    params = tagging_params.merge({tag_id: @tag.id})
    @tagging = Tagging.new(params)
    if @tagging.save
      render json: @tag
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  private
  def tagging_params
    params.require(:tag).permit(
      :taggable_id,
      :taggable_type
    )
  end
end
