count = (friend_ids & friend.friend_ids).size

json.extract!(
  friend, :id, :username
)

json.avatar friend.profile.avatar_url
json.mutual_friends_count count
