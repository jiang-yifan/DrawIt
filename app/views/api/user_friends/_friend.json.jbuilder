json.extract!(
  friend, :id, :username
)

count = (friend_ids & friend.friend_ids).size

json.mutual_friends_count count
