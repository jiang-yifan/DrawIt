class Api::CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      render "show"
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  private
  def comment_params
    params.require(:comment).permit(
      :commentable_id, :commentable_type, :body
    )
  end
end
