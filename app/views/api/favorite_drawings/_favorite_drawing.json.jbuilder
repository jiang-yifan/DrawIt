favorite_drawing = favorite_drawings.find_by(user_id: current_user.id)
if favorite_drawing
  json.extract!(
    favorite_drawing, :id
  )
end
