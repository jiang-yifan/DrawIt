module HasFollowings
  extend ActiveSupport::Concern

  included do
    has_many(
      :following_users,
      class_name: "Following",
      foreign_key: :followed_id,
      dependent: :destroy
    )

    has_many(
      :followed_users,
      class_name: "Following",
      foreign_key: :followee_id,
      dependent: :destroy
    )

    has_many(
      :followeds, through: :followed_users, source: :followed
    )

    has_many(
      :followings, through: :following_users, source: :followee
    )
  end
end
