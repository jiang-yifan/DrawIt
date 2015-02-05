if(hearts.find_by(user_id: current_user.id))
   json.hearted true
else
  json.hearted false
end
