class CreateUserFavorites < ActiveRecord::Migration
  def change
    create_table :user_favorites do |t|
      t.references :user, index: true, null: false
      t.references :drawing, index: true, null: false
      t.timestamps null: false
    end
  end
end
