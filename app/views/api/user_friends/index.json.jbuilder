json.array!(@friends) do |friend|
  json.partial!("friend",
   friend: friend,
  )
end
