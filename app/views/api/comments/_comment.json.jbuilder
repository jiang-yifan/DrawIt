json.extract!(
  comment,
  :id, :body
)

json.username comment.user.username
json.avatar_url comment.user.profile.avatar_url

if show_hearts
  json.hearts_count comment.hearts.count
  json.partial! "api/hearts/user_hearted",
    hearts: comment.hearts
end
