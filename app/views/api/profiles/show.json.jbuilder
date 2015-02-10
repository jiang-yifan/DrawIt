json.extract!(
  @profile, :id, :cover_url, :avatar_url
)
json.username(
  @profile.user.username
)
is_user = @profile.user == current_user

json.is_user is_user
