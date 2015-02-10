class CreateFriendRequests < ActiveRecord::Migration
  def change
    create_table :friend_requests do |t|
      t.references :recipient, null: false, index: true
      t.references :sender, null: false, index: true
      t.timestamps null: false
    end
  end
end
