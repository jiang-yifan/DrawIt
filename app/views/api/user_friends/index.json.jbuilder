friend_ids = @friends.pluck(:id)
json.array!(@friends) do |friend|
  json.partial!("friend",
   friend: friend,
   friend_ids: friend_ids
  )
end
