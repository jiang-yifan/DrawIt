json.extract!(
  @profile, :id, :cover_url, :avatar_url
)
json.username(
  @profile.user.username
)
is_user = @profile.user == current_user
is_friend = current_user.friend_ids.include? @profile.user.id

json.is_user is_user
json.is_friend is_friend
