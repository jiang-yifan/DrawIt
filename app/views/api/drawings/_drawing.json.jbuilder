json.extract!(
  drawing,
  :id, :file_url
)

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

if show_hearts
  json.hearts_count drawing.hearts.count
  json.partial! "api/hearts/user_hearted",
    hearts: drawing.hearts

  if current_user.favorite_drawing_ids.include?(drawing.id)
    json.is_favorite true
  else
    json.is_favorite false
  end
end
