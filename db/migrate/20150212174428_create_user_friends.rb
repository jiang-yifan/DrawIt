class CreateUserFriends < ActiveRecord::Migration
  def change
    create_table :user_friends do |t|
      t.references :user, null: false, index: true
      t.references :friend, null: false, index: true
      t.string :status, null: false, default: 'pending'
      t.timestamps null: false
    end
  end
end
