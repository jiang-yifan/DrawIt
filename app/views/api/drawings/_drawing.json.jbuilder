json.extract!(
  drawing,
  :id, :file_url, :description
)

if show_hearts
  json.heart do
    json.partial! "api/hearts/user_hearted",
      hearts: drawing.hearts
  end

  json.favorite do
    json.partial! "api/favorite_drawings/favorite_drawing",
      favorite_drawings: drawing.user_favorite_drawings
    end
end
json.avatar do
  json.user_id drawing.user.id
  json.username drawing.user.username
  json.avatar_url drawing.user.profile.avatar_url
end

if show_comments
  json.comments do
      json.array!(drawing.comments) do |comment|
          json.partial! 'api/comments/comment',
            comment: comment,
            show_hearts: true
            end
      end

  json.tags do
    json.array!(drawing.taggings) do |tagging|
      json.partial! 'api/tags/tagging', tagging: tagging
    end
  end
end
