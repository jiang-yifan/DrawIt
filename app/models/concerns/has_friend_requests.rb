module HasFriendRequests
  extend ActiveSupport::Concern

  included do
    has_many(
      :sent_requests,
      class_name: "FriendRequest",
      foreign_key: :sender_id,
      dependent: :destroy
    )

    has_many(
      :received_requests,
      class_name: "FriendRequest",
      foreign_key: :recipient_id,
      dependent: :destroy
    )
  end
end
