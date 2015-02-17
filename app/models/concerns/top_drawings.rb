module TopDrawings
  extend ActiveSupport::Concern

  module ClassMethods
    def top_drawings
      Drawing.joins(:hearts)
      .group("drawings.id")
      .order("count(*) Desc")
      .limit(20)
    end
  end
end
