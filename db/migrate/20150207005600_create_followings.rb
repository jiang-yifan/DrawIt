class CreateFollowings < ActiveRecord::Migration
  def change
    create_table :followings do |t|
      t.integer :followed_id, null: false
      t.integer :followee_id, null: false

      t.timestamps null: false
    end
    add_index :followings, :followed_id
    add_index :followings, :followee_id

  end
end
