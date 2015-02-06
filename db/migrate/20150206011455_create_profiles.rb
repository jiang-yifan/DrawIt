class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.references :user, index: true, null: false
      t.string :avatar_url
      t.string :cover_url
      t.timestamps null: false
    end
  end
end
