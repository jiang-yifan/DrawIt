json.extract!(
  drawing,
  :id, :file_url
)

if show_comments
  json.comments do
      json.array!(drawing.comments) do |comment|
          json.partial! 'api/comments/comment', comment: comment
            end
      end
end
