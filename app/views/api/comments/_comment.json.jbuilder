json.extract!(
  comment,
  :id, :body
)

if show_hearts
  json.hearts_count comment.hearts.count
  json.partial! "api/hearts/user_hearted",
    hearts: comment.hearts
end
