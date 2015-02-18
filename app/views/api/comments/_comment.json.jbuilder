json.extract!(
  comment,
  :id, :body
)

json.username comment.user.username
json.avatar_url comment.user.profile.avatar_url
json.user_id comment.user.id
if show_hearts
  json.heart do
    json.partial! "api/hearts/user_hearted",
      hearts: comment.hearts
    end
end
