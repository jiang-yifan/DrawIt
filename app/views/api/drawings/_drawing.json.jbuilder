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
end 

if show_hearts
  json.hearts_count drawing.hearts.count
  json.partial! "api/hearts/user_hearted",
    hearts: drawing.hearts
end
