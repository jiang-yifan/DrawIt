module HasFriends
  extend ActiveSupport::Concern

  included do
    has_many(
      :friended_users,
      class_name: "UserFriend",
      foreign_key: :user_id,
      dependent: :destroy
    )

    has_many(
      :users_friended,
      class_name: "UserFriend",
      foreign_key: :friend_id,
      dependent: :destroy
    )

    has_many(
      :friends,
      through: :friended_users,
      source: :friend
    )
  end
end
