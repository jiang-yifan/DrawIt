class AddColumnUserFriends < ActiveRecord::Migration
  def change
    add_column :user_friends, :status, :string
    change_column :user_friends, :status, :string, null: false, default: 'pending'
  end
end
