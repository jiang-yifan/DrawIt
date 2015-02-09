module TopDrawings
  extend ActiveSupport::Concern

  module ClassMethods
    def top_drawings
      Drawing.joins(:hearts)
      .group("drawings.id")
      .order("count(*)")
      .limit(50)
    end
  end
end
