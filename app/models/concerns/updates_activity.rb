module UpdatesActivity
  extend ActiveSupport::Concern

  included do
    has_many(
      :activities,
      as: :activity,
      dependent: :destroy,
      inverse_of: :activity
    )
    after_save :createActivityRecord
  end

  def createActivityRecord
    activities.create(user_id: user.id)
  end
end
