json.array!(@activities) do |activity|
  json.extract!(
    activity, :id, :activity_id, :activity_type
  )
  json.user_id activity.user.id
  json.username activity.user.username
  json.avatar_url activity.user.profile.avatar_url
end
