json.array!(@friends_activities) do |activity|
  json.extract!(
    activity, :id, :activity_id, :activity_type
  )
  json.user_id activity.user.id
end
