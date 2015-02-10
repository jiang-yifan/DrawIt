json.array!(@notifications) do |notification|
  json.extract!(
    notification, :id, :user_id, :content,
          :status, :notifiable_id, :notifiable_type
  )
  json.avatar_url notification.initiator.profile.avatar_url
end
