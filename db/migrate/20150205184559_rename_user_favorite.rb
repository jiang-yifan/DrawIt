class RenameUserFavorite < ActiveRecord::Migration
  def change
    rename_table :user_favorites, :user_favorite_drawings
  end
end
