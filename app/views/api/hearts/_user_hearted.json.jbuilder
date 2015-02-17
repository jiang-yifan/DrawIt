heart = hearts.find_by(user_id: current_user.id)
json.hearts_count hearts.count
if heart
  json.extract!(
    heart, :id
  )
end
