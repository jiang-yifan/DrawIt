class Api::TagsController < ApplicationController

  def create
    tag_name = params[:tag][:tag_name]
    @tag = Tag.find_or_create(tag_name)
    params = tagging_params.merge({tag_id: @tag.id})
    @tagging = Tagging.new(params)
    if @tagging.save
      render json: @tag
    else
      render json: @tagging.errors.full_messages, status: 422
    end
  end

  def destroy
    @tagging = Tagging.find(params[:id])
    if @tagging.destroy
      render json: @tagging
    else
      render json: @tagging.errors.full_messgaes, status: 422
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
