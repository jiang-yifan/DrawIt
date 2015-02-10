json.array!(@users) do |user|
  json.content user.username.capitalize
  json.image_url user.profile.avatar_url
end
