json.extract!(
  comment,
  :id, :body
)

json.avatar do
  json.username comment.user.usename
  json.avatar_url comment.user.profile.avatar_url
end

if show_hearts
  json.hearts_count comment.hearts.count
  json.partial! "api/hearts/user_hearted",
    hearts: comment.hearts
end
