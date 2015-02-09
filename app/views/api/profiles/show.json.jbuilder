json.extract!(
  @profile, :id, :cover_url, :avatar_url
)

json.username(
  @profile.user.username
)
